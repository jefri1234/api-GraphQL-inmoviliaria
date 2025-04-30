/*
  Warnings:

  - You are about to drop the column `ciudad` on the `Propiedad` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `Propiedad` table. All the data in the column will be lost.

*/
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
    "pais" TEXT,
    "provincia" TEXT,
    "distrito" TEXT,
    "userId" INTEGER NOT NULL,
    "imgenPrincipla" TEXT NOT NULL DEFAULT 'placeholder.jpg',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Propiedad_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Propiedad" ("area", "banos", "createdAt", "descripcion", "direccion", "estadoPropiedad", "garage", "habitaciones", "id", "imgenPrincipla", "longitud", "pais", "precio", "tipoPropiedad", "userId") SELECT "area", "banos", "createdAt", "descripcion", "direccion", "estadoPropiedad", "garage", "habitaciones", "id", "imgenPrincipla", "longitud", "pais", "precio", "tipoPropiedad", "userId" FROM "Propiedad";
DROP TABLE "Propiedad";
ALTER TABLE "new_Propiedad" RENAME TO "Propiedad";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
