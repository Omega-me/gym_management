import { eStatusCode } from '@/common/enums';
import { prisma } from '@/common/libs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  if (isNaN(Number(params.id))) {
    return NextResponse.json(
      {
        error: `Invalid id ${params.id}`,
        status: eStatusCode.CONFLICT,
      },
      {
        status: eStatusCode.CONFLICT,
      },
    );
  }
  const data = await prisma.manager.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!data) {
    return NextResponse.json(
      {
        error: `Manager with id ${params.id} not found`,
        status: eStatusCode.NOT_FOUND,
      },
      {
        status: eStatusCode.NOT_FOUND,
      },
    );
  }

  return NextResponse.json(data);
}
