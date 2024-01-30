import { prisma } from '@/common/libs';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const data = await prisma.manager.findMany();
  return NextResponse.json(data);
}
