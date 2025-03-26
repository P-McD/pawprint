
import { generateProductItems } from 'seed/generateProductItems';
import { describe, expect, test } from 'vitest'
describe("generate product items", () => {
  test("generates an item with one size", () => {
    const products = [
      {
        id: "testprodid",
        productName: "name",
        productImage: "url",
        productPrice: 20,
        productDescription: "test desc",
        productDetails: "test prod details",
        colourId: 1,
        categoryId: 1,
        createdAt: new Date(Date.now()),
      },
    ];

    const expected = [
      {
        quantityInStock: 2,
        productId: "testprodid",
        sizeName: "one_size",
      },
    ];
    const actual = generateProductItems(products);
    expect(actual).toEqual(expected);
  });
  test("generates 3 ProductItems for each product aside from the first one", () => {
    const products = [
      {
        id: "testprodid0",
        productName: "name",
        productImage: "url",
        productPrice: 20,
        productDescription: "test desc",
        productDetails: "test prod details",
        colourId: 1,
        categoryId: 1,
        createdAt: new Date(Date.now()),
      },
      {
        id: "testprodid1",
        productName: "name",
        productImage: "url",
        productPrice: 20,
        productDescription: "test desc",
        productDetails: "test prod details",
        colourId: 1,
        categoryId: 1,
        createdAt: new Date(Date.now()),
      },
    ];

    const actual = generateProductItems(products);
    expect(actual).toHaveLength(4);

  });
  test("generated productItems have correct stock levels, including no stock of large items for products at odd indices", () => {
    const products = [
      {
        id: "testprodid0",
        productName: "name",
        productImage: "url",
        productPrice: 20,
        productDescription: "test desc",
        productDetails: "test prod details",
        colourId: 1,
        categoryId: 1,
        createdAt: new Date(Date.now()),
      },
      {
        id: "testprodid1",
        productName: "name",
        productImage: "url",
        productPrice: 20,
        productDescription: "test desc",
        productDetails: "test prod details",
        colourId: 1,
        categoryId: 1,
        createdAt: new Date(Date.now()),
      },
      {
        id: "testprodid2",
        productName: "name",
        productImage: "url",
        productPrice: 20,
        productDescription: "test desc",
        productDetails: "test prod details",
        colourId: 1,
        categoryId: 1,
        createdAt: new Date(Date.now()),
      },
    ];

    const expected = [
        {
          quantityInStock: 2,
          productId: "testprodid0",
          sizeName: "one_size",
        },
        {
            quantityInStock: 2,
            productId: "testprodid1",
            sizeName: "s",
          },
          {
            quantityInStock: 4,
            productId: "testprodid1",
            sizeName: "m",
          },
          {
            quantityInStock: 0,
            productId: "testprodid1",
            sizeName: "l",
          },
          {
            quantityInStock: 2,
            productId: "testprodid2",
            sizeName: "s",
          },
          {
            quantityInStock: 4,
            productId: "testprodid2",
            sizeName: "m",
          },
          {
            quantityInStock: 6,
            productId: "testprodid2",
            sizeName: "l",
          },
      ];

    const actual = generateProductItems(products);
    expect(actual).toHaveLength(7);
    expect(actual).toEqual(expected)
  });
});
