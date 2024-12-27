/*
  Warnings:

  - You are about to drop the column `vote_rate` on the `Post` table. All the data in the column will be lost.

*/
-- AlterTable

-- AlterTable
ALTER TABLE `Post` ADD COLUMN `flavor` VARCHAR(191) NULL,
    ADD COLUMN `same_course_id` INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `JapanFood` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_same_course_id_fkey` FOREIGN KEY (`same_course_id`) REFERENCES `JapanFood`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
