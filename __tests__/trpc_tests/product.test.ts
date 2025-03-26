import { testSeed } from "seed/testseed";
import { prismaClientTest } from "/home/poppycom3/javascript/personal-js/pawprint/seed/prismaClientTest.ts";
import { productsData } from "seed/seed-data/test-seed-data/test.products";
import { createCaller } from "/home/poppycom3/javascript/personal-js/pawprint/src/server/api/root.ts";
import { describe, expect, test } from "vitest";

beforeEach(async () => {
  await testSeed();
});

afterAll(async () => {
  await prismaClientTest.$disconnect();
});

describe("productRouter", () => {
  describe("getAll", () => {
    const ctx = { db: prismaClientTest, session: null };
    const testCaller = createCaller(ctx);
    test("Retrieves all products", async () => {
      const retrievedProducts = await testCaller.product.getAll();
      expect(retrievedProducts).toHaveLength(productsData.length);
    });
  });
  describe("getPaginated", () => {
    const ctx = { db: prismaClientTest, session: null };
    const testCaller = createCaller(ctx);
    test("Retrieves the correct amount of products when paginated", async () => {
      const retrievedProductsWith1 = await testCaller.product.getPaginated({numberToTake : 1});
      const retrievedProductsWith2 = await testCaller.product.getPaginated({numberToTake : 2});
      const retrievedProductsWith3 = await testCaller.product.getPaginated({numberToTake : 3});
      expect(retrievedProductsWith1).toHaveLength(1);
      expect(retrievedProductsWith2).toHaveLength(2);
      expect(retrievedProductsWith3).toHaveLength(3);
    });
  });
  describe("getSingleProduct", () => {
    const ctx = { db: prismaClientTest, session: null };
    const testCaller = createCaller(ctx);
    test("Retrieves a single product", async () => {
      const retrievedProducts = await testCaller.product.getAll();
      const expectedSingleProduct = retrievedProducts[0];

      expect(expectedSingleProduct).not.toBeUndefined();

      if (expectedSingleProduct !== undefined) {
        const actualSingleProduct = await testCaller.product.getSingleProduct({
          id: expectedSingleProduct.id,
        });
        expect(actualSingleProduct).toEqual(expectedSingleProduct);
      }
    });
    test("Throws an error if a non-existent input id is provided", async () => {
      //TODO: Statistically very unlikely that this will fail, but will replace with mocks later
      const retrievedProducts = await testCaller.product.getAll();
      retrievedProducts.forEach((product) => {
        expect(product.id).not.toBe("statisticallyUnlikelyId");
      });
      await testCaller.product
        .getSingleProduct({ id: "statisticallyUnlikelyId" })
        .catch((err) => expect(err.message).toBe("No Product found"));
    });
  });
});
