'use strict'

const glue = require(`schemaglue`)
const { schema, resolver } = glue(`src/graphql`)
const { ApolloServer, gql } = require(`apollo-server-koa`)

const server = new ApolloServer({ typeDefs: schema, resolvers: resolver })

module.exports = server
