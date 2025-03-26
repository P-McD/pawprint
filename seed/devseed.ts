import { categoriesData } from "./seed-data/dev-seed-data/dev.categories.ts";
import { PrismaClient } from "@prisma/client";
import { productsData } from "./seed-data/dev-seed-data/dev.products.ts";
import { coloursData } from "./seed-data/dev-seed-data/dev.colours.ts";
import { sizesData } from "./seed-data/dev-seed-data/dev.sizes.ts";
import { generateProductItems } from "./generateProductItems.ts";

const prisma = new PrismaClient();
export const devSeed = async () => {
  await prisma.productItem.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.colour.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.size.deleteMany({});
  console.log("delete complete!");
  await prisma.$queryRaw`ALTER SEQUENCE "public"."Category_id_seq" RESTART WITH 1`;
  await prisma.$queryRaw`ALTER SEQUENCE "public"."Colour_id_seq" RESTART WITH 1`;
  console.log('autoincrement reset successfully')
  await prisma.size.createMany({ data: sizesData})
  await prisma.category.createMany({ data: categoriesData });
  await prisma.colour.createMany({data: coloursData})
  await prisma.product.createMany({ data: productsData });
  const products = await prisma.product.findMany();
  const productItemData = generateProductItems(products)
  await prisma.productItem.createMany({ data:productItemData})

  console.log('seeding complete!')

};
devSeed().catch((err) => console.log('ERROR ENCOUNTERED >>>', err));
