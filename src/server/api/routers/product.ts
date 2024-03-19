import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({

//   create: publicProcedure
//     .input(z.object({ name: z.string().min(1) }))
//     .mutation(async ({ ctx, input }) => {
//       // simulate a slow db call
//       return ctx.db.product.create({
//         data: {
//           productName: input.name,
//           

//         },
//       });
//     }),

  getLatest: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany({
      orderBy: { createdAt: "desc" },
    });
  }),
  getAll: publicProcedure.query(({ctx}) => {
    return ctx.db.product.findMany()
  })

});