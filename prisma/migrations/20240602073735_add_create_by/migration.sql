/*
  Warnings:

  - Added the required column `createBy` to the `Expenses` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `expenses` ADD COLUMN `createBy` VARCHAR(191) NOT NULL;
