import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const cartItemRouter = createTRPCRouter({
  createNewCartItem: publicProcedure.input(
    z.object({ cartId: z.string(),
      productItem: z.object({
        id: z.string(),
        quantityInStock: z.number(),
        productId: z.string(),
        sizeName: z.string(),
      }),
    })
  ).mutation( async ({ctx, input}) => {
        return ctx.db.cartItem.create({
            data: {
                cartId : input.cartId,
                quantity: 1,
                productItemId : input.productItem.id
            }
        })
    })
});
