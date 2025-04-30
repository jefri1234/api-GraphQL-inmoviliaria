/*
  Warnings:

  - You are about to drop the column `tipo` on the `Propiedad` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - Added the required column `estadoPropiedad` to the `Propiedad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imgenPrincipla` to the `Propiedad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoPropiedad` to the `Propiedad` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Propiedad` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Imagen" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "url" TEXT NOT NULL,
    "propiedadId" INTEGER NOT NULL,
    CONSTRAINT "Imagen_propiedadId_fkey" FOREIGN KEY ("propiedadId") REFERENCES "Propiedad" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Propiedad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcion" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "area" REAL,
    "habitaciones" INTEGER,
    "banos" INTEGER,
    "garage" INTEGER,
    "longitud" REAL,
    "tipoPropiedad" TEXT NOT NULL,
    "estadoPropiedad" TEXT NOT NULL,
    "direccion" TEXT,
    "ciudad" TEXT,
    "estado" TEXT,
    "pais" TEXT,
    "userId" INTEGER NOT NULL,
    "imgenPrincipla" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Propiedad_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Propiedad" ("area", "createdAt", "descripcion", "id", "precio") SELECT "area", "createdAt", "descripcion", "id", "precio" FROM "Propiedad";
DROP TABLE "Propiedad";
ALTER TABLE "new_Propiedad" RENAME TO "Propiedad";
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT,
    "telefono" TEXT,
    "fecha" DATETIME,
    "rol" TEXT,
    "fechaNacimiento" DATETIME
);
INSERT INTO "new_User" ("createdAt", "id", "name") SELECT "createdAt", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
