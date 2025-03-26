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

describe("cartItem", () => {
    
})