
# CREATE FAST A API 
nest g resource carros

NestJS CLI te pregunta qué tipo de API quieres generar, y cuando eliges GraphQL, te da dos opciones:

🔷 Opción 1: GraphQL (code first)
🔶 Opción 2: GraphQL (schema first)

Ambas son formas válidas de crear APIs GraphQL en NestJS, pero funcionan de forma muy distinta.


✅ ¿Y el resolver qué hace?
    Es el equivalente al controller en REST.

    Llama a los métodos del service.

    Define los nombres de las operaciones para GraphQL.


✅ ¿Y el service qué hace?
    Aquí va toda la lógica de negocio.

    Se comunica con la base de datos (por ejemplo, usando Prisma, TypeORM, Mongoose, etc.).

    El resolver nunca habla directamente con la base de datos, solo con el service.



✅ ¿Qué son las mutations y queries?
Las defines en el resolver:

- Mutations
Sirven para:

createPayment: Crear

updatePayment: Actualizar

removePayment: Eliminar


✅ ¿Qué es el esquema en NestJS con GraphQL?
En NestJS con GraphQL code-first, el esquema se construye automáticamente a partir de tus:

    1. Entities → Tipos de salida (@ObjectType)
    2. DTOs (Inputs) → Tipos de entrada (@InputType)



✅ Diferencias clave: REST vs GraphQL en NestJS

🔷 REST API (NestJS)
Normalmente contiene:

controller.ts: Define las rutas HTTP (GET, POST, etc.).

service.ts: Contiene la lógica de negocio (consultas a BD, reglas).

module.ts: Agrupa y organiza el módulo.

🔷 GraphQL API (NestJS)
Contiene:

resolver.ts: Reemplaza al controller, define los queries y mutations.

service.ts: Igual que en REST, maneja la lógica de negocio.

module.ts: También igual que en REST, organiza las dependencias.

Esquema (Schema): Esto es único en GraphQL y muy importante.

