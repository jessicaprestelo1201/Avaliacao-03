/*
  Warnings:

  - You are about to alter the column `prepTime` on the `restaurants` table. The data in that column could be lost. The data in that column will be cast from `String` to `Float`.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_restaurants" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "imageURL" TEXT,
    "prepTime" REAL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" DATETIME NOT NULL
);
INSERT INTO "new_restaurants" ("category", "createdAt", "description", "id", "imageURL", "ingredients", "name", "prepTime", "price", "updateAt") SELECT "category", "createdAt", "description", "id", "imageURL", "ingredients", "name", "prepTime", "price", "updateAt" FROM "restaurants";
DROP TABLE "restaurants";
ALTER TABLE "new_restaurants" RENAME TO "restaurants";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
