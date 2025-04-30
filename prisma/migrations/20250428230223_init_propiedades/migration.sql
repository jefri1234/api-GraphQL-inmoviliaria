-- CreateTable
CREATE TABLE "Propiedad" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descripcion" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "precio" REAL NOT NULL,
    "area" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
