import { eStatusCode } from '@/common/enums';
import { prisma } from '@/common/libs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  if (isNaN(Number(params.id))) {
    return NextResponse.json(
      {
        error: `Invalid id ${params.id}`,
        status: eStatusCode.INTERNAL_SERVER_ERROR,
      },
      {
        status: eStatusCode.INTERNAL_SERVER_ERROR,
      },
    );
  }
  const data = await prisma.gym.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      manager: {
        where: {
          id_gym: Number(params.id),
        },
      },
      employee: {
        where: {
          id_gym: Number(params.id),
        },
      },
      membership: {
        where: {
          id_gym: Number(params.id),
        },
      },
    },
  });
  if (!data) {
    return NextResponse.json(
      {
        error: `Gym with id ${params.id} not found`,
        status: eStatusCode.NOT_FOUND,
      },
      {
        status: eStatusCode.NOT_FOUND,
      },
    );
  }

  return NextResponse.json(data);
}
