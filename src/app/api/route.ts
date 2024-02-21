import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  const campanhas = await prisma.campanha.findMany();

  return Response.json(campanhas);
}

export async function POST() {
  return Response.json({ post: true });
}
