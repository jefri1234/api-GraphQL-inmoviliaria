# install dependecies
npm install @nestjs/graphql @nestjs/apollo graphql apollo-server-express
npm install @prisma/client
npm install -D prisma sqlite3


# SET UP PRISMA

  # initialize prisma
  npx prisma init --datasource-provider sqlite
  # generate migration for create DB
  npx prisma migrate dev --name init
  # Generate prisma client
  npx prisma generate

# RUN SERVER
  npm run start:dev

# TEST QUERIS AND MUTATIONS -----USER------

  mutation {
  createUser(createUserInput: { name: "Juan", email: "juan@mail.com" }) {
    id
    name
    email
  }
  }

  query {
  users {
    id
    name
    email
  }
  }


 # QUERY FOR PRPOPIEDAD

  query {
  propiedades {
    id
    descripcion
    precio
    area
    habitaciones
    banos
    garage
    longitud
    tipoPropiedad
    estadoPropiedad
    direccion  
    ciudad
    estado
    pais
    imgenPrincipla
    createdAt

    imagenes {
      id
      url
    }
  }
}


# MUTACION FOR CREATE PROPIEDAD

mutation {
  createPropiedad(createPropiedadInput: {
    descripcion: "Casa moderna en el centro",
    precio: 150000,
    area: 120,
    habitaciones: 3,
    banos: 2,
    garage: 1,
    longitud: -77.042793,
    tipoPropiedad: CASA,
    estadoPropiedad: DISPONIBLE,
    direccion: "Av. Principal 123",
    pais: "Perú",
    departamento: "Lima",
    provincia: "Lima",
    distrito: "Miraflores",
    userId: 2,
    imgenPrincipla:"http://imagenes/casitas.png"
  }) {
    id
    descripcion
    precio
    habitaciones
    imagenes {
      url
    }
  }
}

