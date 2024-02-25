import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(
request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    const response = await prisma.campanha.findFirst({
      where: {
        id: id
      }
    });

    if (response) {
      return new Response(JSON.stringify(response), { status: 200 });
    } else {
      return new Response('Campanha não encontrada', { status: 404 });
    }
  } catch (error) {
    return new Response('Não foi possivel recuperar a campanha', {
      status: 500
    });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    const requestBody = await request.json();

    // Find the campaign by ID
    const existingCampaign = await prisma.campanha.findUnique({
      where: {
        id: id
      }
    });

    // If the campaign doesn't exist, return a 404 response
    if (!existingCampaign) {
      return new Response('Campanha não encontrada', { status: 404 });
    }

    // Update the campaign with the new data
    const updatedCampaign = await prisma.campanha.update({
      where: {
        id: id
      },
      data: requestBody
    });

    return new Response(JSON.stringify(updatedCampaign), { status: 200 });
  } catch (error) {
    console.error('Erro ao editar campanha:', error);
    return new Response('Erro ao editar campanha', { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  try {
    // Find the campaign by ID
    const existingCampaign = await prisma.campanha.findUnique({
      where: {
        id: id
      }
    });

    // If the campaign doesn't exist, return a 404 response
    if (!existingCampaign) {
      return new Response('Campanha não encontrada', { status: 404 });
    }

    // Delete the campaign
    await prisma.campanha.delete({
      where: {
        id: id
      }
    });

    return new Response('Campanha apagada com sucesso', { status: 200 });
  } catch (error) {
    console.error('Erro ao deletar campanha:', error);
    return new Response('Erro ao deletar campanha', { status: 500 });
  }
}
