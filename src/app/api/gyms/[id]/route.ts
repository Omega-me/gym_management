import { eStatusCode } from '@/common/enums';
import { prisma } from '@/common/libs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
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
  const data = await prisma.gym.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      manager: {},
      employee: {},
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

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
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

  await prisma.gym.delete({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(
    {},
    {
      status: eStatusCode.NO_CONTENT,
    },
  );
}

export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
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
  const body = await req.json();

  const data = await prisma.gym.update({
    data: body,
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(data);
}
