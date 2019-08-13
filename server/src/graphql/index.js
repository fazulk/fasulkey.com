'use strict'
const glue = require(`schemaglue`)
const { schema, resolver } = glue(`src/routes/graphql`)
const { ApolloServer } = require(`apollo-server`)

const server = new ApolloServer({ typeDefs: schema, resolvers: resolver })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})
