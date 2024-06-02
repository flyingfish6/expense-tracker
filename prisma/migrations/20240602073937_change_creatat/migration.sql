/*
  Warnings:

  - You are about to drop the column `createBy` on the `expenses` table. All the data in the column will be lost.
  - Added the required column `createAt` to the `Expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `expenses` DROP COLUMN `createBy`,
    ADD COLUMN `createAt` VARCHAR(191) NOT NULL;
