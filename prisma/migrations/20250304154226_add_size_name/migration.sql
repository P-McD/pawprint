/*
  Warnings:

  - You are about to drop the column `sizeName` on the `Size` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id,name]` on the table `Size` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sizeName` to the `ProductItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_sizeId_fkey";

-- AlterTable
ALTER TABLE "ProductItem" ADD COLUMN     "sizeName" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Size" DROP COLUMN "sizeName",
ADD COLUMN     "name" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Size_id_name_key" ON "Size"("id", "name");

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_sizeId_sizeName_fkey" FOREIGN KEY ("sizeId", "sizeName") REFERENCES "Size"("id", "name") ON DELETE RESTRICT ON UPDATE CASCADE;
