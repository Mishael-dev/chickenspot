import prisma from "../../../prisma/connection";

export async function GET() {
  let data = await prisma.inventory.findMany();

  return Response.json({ data });
}
