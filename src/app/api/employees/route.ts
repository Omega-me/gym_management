import { prisma } from '@/common/libs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const data = await prisma.employee.findMany();
  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {
  const data = await prisma.employee.create({
    data: await req.json(),
  });
  return NextResponse.json(data);
}
