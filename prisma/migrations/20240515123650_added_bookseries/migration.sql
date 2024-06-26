/*
  Warnings:

  - Added the required column `seriesId` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Book` ADD COLUMN `seriesId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `BookSeries` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Book` ADD CONSTRAINT `Book_seriesId_fkey` FOREIGN KEY (`seriesId`) REFERENCES `BookSeries`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
