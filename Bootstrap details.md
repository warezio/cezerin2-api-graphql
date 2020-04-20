[4/4] Building fresh packages...
Done in 0.64s.
[graphql create] Running boilerplate install script...
Running \$ prisma deploy...
Creating stage dev for service cezerin2-api-graphql √
Deploying service `cezerin2-api-graphql` to stage `dev` to server `prisma-us1` 3.1s

Changes:

Post (Type)

-   Created type `Post`
-   Created field `id` of type `ID!`
-   Created field `createdAt` of type `DateTime!`
-   Created field `updatedAt` of type `DateTime!`
-   Created field `published` of type `Boolean!`
-   Created field `title` of type `String!`
-   Created field `content` of type `String!`
-   Created field `author` of type `User!`

User (Type)

-   Created type `User`
-   Created field `id` of type `ID!`
-   Created field `email` of type `String!`
-   Created field `password` of type `String!`
-   Created field `name` of type `String!`
-   Created field `posts` of type `[Post!]!`

PostToUser (Relation)

-   Created an inline relation between `Post` and `User` in the column `author` of table `Post`

Applying changes 2.9s

post-deploy:

Generating schema... 40ms
Saving Prisma Client (TypeScript) at C:\Websites\Cezerin\cezerin2-api-graphql\src\generated\prisma-client

Running prisma generate √
Warning: The `prisma generate` command was executed twice. Since Prisma 1.31, the Prisma client is generated automatically after running `prisma deploy`. It is not necessary to generate it via a `post-deploy` hook any more, you can therefore remove the hook if you do not need it otherwise.
Generating schema 56ms
Saving Prisma Client (TypeScript) at cezerin2-api-graphql\src\generated\prisma-client

Hooks:
Seeding based on seed.graphql 1.0s

Your Prisma endpoint is live:

HTTP: https://us1.prisma.sh/public-almondroarer-455/cezerin2-api-graphql/dev
WS: wss://us1.prisma.sh/public-almondroarer-455/cezerin2-api-graphql/dev

You can view & edit your data here:

Prisma Admin: https://us1.prisma.sh/public-almondroarer-455/cezerin2-api-graphql/dev/_admin

Next steps:

1. Change directory: `cd cezerin2-api-graphql`
2. Start local server and open Playground: `yarn start`
