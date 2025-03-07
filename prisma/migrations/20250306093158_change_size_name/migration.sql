/*
  Warnings:

  - You are about to drop the column `sizeId` on the `ProductItem` table. All the data in the column will be lost.
  - The primary key for the `Size` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Size` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Size` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[sizeName]` on the table `Size` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `sizeName` to the `Size` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProductItem" DROP CONSTRAINT "ProductItem_sizeId_sizeName_fkey";

-- DropIndex
DROP INDEX "Size_id_name_key";

-- AlterTable
ALTER TABLE "ProductItem" DROP COLUMN "sizeId";

-- AlterTable
ALTER TABLE "Size" DROP CONSTRAINT "Size_pkey",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "sizeName" TEXT NOT NULL,
ADD CONSTRAINT "Size_pkey" PRIMARY KEY ("sizeName");

-- CreateIndex
CREATE UNIQUE INDEX "Size_sizeName_key" ON "Size"("sizeName");

-- AddForeignKey
ALTER TABLE "ProductItem" ADD CONSTRAINT "ProductItem_sizeName_fkey" FOREIGN KEY ("sizeName") REFERENCES "Size"("sizeName") ON DELETE RESTRICT ON UPDATE CASCADE;
