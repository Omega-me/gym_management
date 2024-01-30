import { prisma } from '@/common/libs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const data = await prisma.membership.findMany({
    include: {
      client: {},
      gym: {},
      employee_membership_id_dietitianToemployee: {},
      employee_membership_id_exercise_physiologistToemployee: {},
      employee_membership_id_fitness_consultantToemployee: {},
      employee_membership_id_personal_trainerToemployee: {},
    },
  });
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const data = await prisma.membership.create({
    data: await req.json(),
  });
  return NextResponse.json(data);
}
