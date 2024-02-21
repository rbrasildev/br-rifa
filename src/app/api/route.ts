import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  const newUser = await prisma.user.create({
    data: {
      name: 'Elliott',
      email: 'xelliottx@example-user.com'
    }
  });

  console.log(newUser);

  const users = await prisma.user.findMany();

  return Response.json(users);
}

export async function POST() {
  return Response.json({ post: true });
}
