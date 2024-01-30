import { eStatusCode } from '@/common/enums';
import { prisma } from '@/common/libs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { id: string; idManager: string } }) {
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
  if (isNaN(Number(params.idManager))) {
    return NextResponse.json(
      {
        error: `Invalid manager id ${params.idManager}`,
        status: eStatusCode.CONFLICT,
      },
      {
        status: eStatusCode.CONFLICT,
      },
    );
  }
  const data = await prisma.employee.findMany({
    where: {
      id_gym: Number(params.id),
      AND: {
        id_manager: Number(params.idManager),
      },
    },
  });
  return NextResponse.json(data);
}
