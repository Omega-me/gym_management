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
  const data = await prisma.client.findUnique({
    where: {
      id: Number(params.id),
    },
    include: {
      membership: {
        where: {
          id_client: Number(params.id),
        },
        include: {
          gym: {},
          employee_membership_id_dietitianToemployee: {},
          employee_membership_id_exercise_physiologistToemployee: {},
          employee_membership_id_fitness_consultantToemployee: {},
          employee_membership_id_personal_trainerToemployee: {},
        },
      },
    },
  });
  if (!data) {
    return NextResponse.json(
      {
        error: `Client with id ${params.id} not found`,
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
        status: eStatusCode.INTERNAL_SERVER_ERROR,
      },
      {
        status: eStatusCode.INTERNAL_SERVER_ERROR,
      },
    );
  }

  await prisma.client.delete({
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
        status: eStatusCode.INTERNAL_SERVER_ERROR,
      },
      {
        status: eStatusCode.INTERNAL_SERVER_ERROR,
      },
    );
  }
  const body = await req.json();

  const data = await prisma.client.update({
    data: body,
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(data);
}
