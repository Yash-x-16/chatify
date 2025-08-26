/*
  Warnings:

  - You are about to drop the column `RecieverID` on the `Messages` table. All the data in the column will be lost.
  - Added the required column `RecieverId` to the `Messages` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Messages" DROP COLUMN "RecieverID",
ADD COLUMN     "RecieverId" INTEGER NOT NULL;
