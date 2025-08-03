/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Product` table. All the data in the column will be lost.
  - Added the required column `catslug` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "public"."Product" DROP CONSTRAINT "Product_categoryId_fkey";

-- AlterTable
ALTER TABLE "public"."Product" DROP COLUMN "categoryId",
ADD COLUMN     "catslug" TEXT NOT NULL,
ADD COLUMN     "isFeatured" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "options" JSONB[],
ALTER COLUMN "img" DROP NOT NULL;

-- CreateTable
CREATE TABLE "public"."order" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "products" JSONB[],
    "status" TEXT NOT NULL DEFAULT 'pending',
    "price" DECIMAL(65,30) NOT NULL,
    "internalId" TEXT,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "order_internalId_key" ON "public"."order"("internalId");

-- AddForeignKey
ALTER TABLE "public"."Product" ADD CONSTRAINT "Product_catslug_fkey" FOREIGN KEY ("catslug") REFERENCES "public"."Category"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
