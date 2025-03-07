import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productItemRouter = createTRPCRouter({

  getAll: publicProcedure.query(({ctx}) => {
    return ctx.db.productItem.findMany()
  }),

  getAllItemsForProduct: publicProcedure
  .input(z.object({productId : z.string()}))
  .query(({ctx, input}) => {
    return ctx.db.productItem.findMany({
      where: { productId: input.productId}
    })
  }),

  getSingleProductItem: publicProcedure
  .input(z.object({id : z.string()}))
  .query(({ctx, input}) => {
    return ctx.db.productItem.findUniqueOrThrow({
      where: { id: input.id}
    })
  })
});