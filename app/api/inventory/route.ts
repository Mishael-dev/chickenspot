import prisma from "../../../prisma/connection";

export const revalidate = 60;

export async function GET() {
  let data = await prisma.inventory.findMany();
  console.log(data);

  return Response.json({ data });
}
