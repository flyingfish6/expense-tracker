-- CreateTable
CREATE TABLE `Expenses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `amount` VARCHAR(191) NOT NULL,
    `budgetId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Expenses` ADD CONSTRAINT `Expenses_budgetId_fkey` FOREIGN KEY (`budgetId`) REFERENCES `Budgets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
