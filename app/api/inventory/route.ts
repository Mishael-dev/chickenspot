import prisma from "../../../prisma/connection";

// export const revalidate = 60;

export async function GET() {
  let data = await prisma.inventory.findMany();
  console.log(process.env.URL)
  return Response.json({ data });
}
