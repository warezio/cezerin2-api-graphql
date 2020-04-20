import { GraphQLServer } from 'graphql-yoga'
import mongoose from 'mongoose'
import { prisma } from './generated/prisma-client'
import resolvers from './resolvers'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => ({
        ...request,
        prisma,
    }),
})

// setting up mongoose
async function connectMongoose() {
    const DBUser = process.env.MONGODB_CONFIG_USER
    const DBPassword = process.env.MONGODB_CONFIG_PASSWORD
    const DBServerName = process.env.MONGODB_CONFIG_SERVER_NAME
    const DBDataBase = process.env.MONGODB_CONFIG_DATABASE

    await mongoose.connect(
        `mongodb+srv://${DBUser}:${DBPassword}@${DBServerName}.mongodb.net/${DBDataBase}?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
}

connectMongoose

server.start(() => console.log(`Server is running on http://localhost:4000`))
