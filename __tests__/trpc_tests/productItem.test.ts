import { testSeed } from "seed/testseed";
import { prismaClientTest } from "/home/poppycom3/javascript/personal-js/pawprint/seed/prismaClientTest.ts";
import { createCaller } from "/home/poppycom3/javascript/personal-js/pawprint/src/server/api/root.ts";
import { describe, expect, test } from "vitest";

beforeEach(async () => {
  await testSeed();
});

afterAll(async () => {
  await prismaClientTest.$disconnect();
});

describe("", () => {
  //describe("getAll", () => {});
  describe("getAllItemsForProduct", () => {
    test("retrieves all productItems for a product that is available in one size", async () => {
      const ctx = { db: prismaClientTest, session: null };
      const testCaller = createCaller(ctx);
      const allProducts = await testCaller.product.getAll();

      expect(allProducts.length).toBeGreaterThanOrEqual(1)

      if (allProducts[0]){
        const firstProduct = allProducts[0]
        const productItems = await testCaller.productItem.getAllItemsForProduct({productId :firstProduct.id})

        expect(productItems).toHaveLength(1)
        expect(productItems[0]).toMatchObject({
            id : expect.any(String),
            quantityInStock : expect.any(Number),
            productId : firstProduct.id,
            sizeName: "one_size"
        })
      }
    });
    test("retrieves all productItems for a product that is available in S M L and with L not in stock at an odd index", async () => {
        const ctx = { db: prismaClientTest, session: null };
        const testCaller = createCaller(ctx);
        const allProducts = await testCaller.product.getAll();
  
        expect(allProducts.length).toBeGreaterThanOrEqual(2)
  
        if (allProducts[1]){
          const secondProduct = allProducts[1]
          const productItems = await testCaller.productItem.getAllItemsForProduct({productId :secondProduct.id})
  
          expect(productItems).toHaveLength(3)
          expect(productItems[0]).toMatchObject({
              id : expect.any(String),
              quantityInStock : expect.any(Number),
              productId : secondProduct.id,
              sizeName: "s"
          }),
          expect(productItems[1]).toMatchObject({
            id : expect.any(String),
            quantityInStock : expect.any(Number),
            productId : secondProduct.id,
            sizeName: "m"
        })
        expect(productItems[2]).toMatchObject({
            id : expect.any(String),
            quantityInStock : 0,
            productId : secondProduct.id,
            sizeName: "l"
        })
        }
      });
  });
});
