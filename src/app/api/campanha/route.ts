import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

interface CampanhaProps {
  id?: number;
  nomeCampanha: string;
  qtdBilhete: string;
  valor: string;
  localSorteio: string;
  telefone: string;
}

export async function GET() {
  const campanhas = await prisma.campanha.findMany();

  return Response.json(campanhas);
}

export async function POST(request: Request) {
  try {
    const requestBody = await request.json(); // Assuming JSON data is sent in the request

    if (!requestBody) {
      return new Response('Request body is empty', { status: 400 });
    }

    const {
      nomeCampanha,
      qtdBilhete,
      valor,
      localSorteio,
      telefone
    }: CampanhaProps = requestBody;

    // Assuming `prisma` is imported and available here
    await prisma.campanha.create({
      data: {
        nomeCampanha,
        qtdBilhete: parseInt(qtdBilhete),
        valor: parseFloat(valor),
        localSorteio,
        telefone
      }
    });

    return new Response('Campaign created successfully', { status: 201 });
  } catch (error) {
    return new Response('Failed to create campaign', { status: 500 });
  }
}
