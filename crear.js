// crear.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    // 👇 Asegúrate de que exista una propiedad con ID 1 (puedes cambiar el ID según tus datos reales)
    const imagen = await prisma.imagen.create({
        data: {
            url: 'https://ejemplo.com/casas-campo.jpg',
            propiedad: {
                connect: { id: 1 },
            },
        },
    });

    console.log('Imagen creada:', imagen);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
