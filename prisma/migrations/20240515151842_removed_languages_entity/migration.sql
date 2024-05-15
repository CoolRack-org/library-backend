/*
  Warnings:

  - You are about to drop the column `languageId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `Language` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `language` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Book` DROP FOREIGN KEY `Book_languageId_fkey`;

-- AlterTable
ALTER TABLE `Book` DROP COLUMN `languageId`,
    ADD COLUMN `language` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `Language`;
