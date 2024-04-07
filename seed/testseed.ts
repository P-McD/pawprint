import { categoriesData } from "./seed-data/test-seed-data/test.categories.ts";
import { PrismaClient } from "@prisma/client";
import { productsData } from "./seed-data/test-seed-data/test.products.ts";
import { coloursData } from "./seed-data/test-seed-data/test.colours.ts";

const prisma = new PrismaClient();
export const testSeed = async () => {
  await prisma.product.deleteMany({});
  await prisma.colour.deleteMany({})
  await prisma.category.deleteMany({});
  console.log("delete complete!");
  await prisma.$queryRaw`ALTER SEQUENCE "public"."Category_id_seq" RESTART WITH 1`;
  await prisma.$queryRaw`ALTER SEQUENCE "public"."Colour_id_seq" RESTART WITH 1`;
  console.log('autoincrement reset successfully')
  await prisma.category.createMany({ data: categoriesData });
  await prisma.colour.createMany({data: coloursData})
  await prisma.product.createMany({ data: productsData });
  console.log('seeding complete!')

};
testSeed().catch((err) => console.log('ERROR ENCOUNTERED >>>', err));
