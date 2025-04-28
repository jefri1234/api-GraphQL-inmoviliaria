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

# TEST QUERIS AND MUTATIONS

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