import prisma from "../../../prisma/connection";

export async function GET() {
  let inventory = await prisma.inventory.findMany();

  return Response.json({ inventory });
}
