const router = require(`express`).Router()
const expressGraphQL = require(`express-graphql`)
const bodyParser = require(`body-parser`)
const cors = require(`cors`)
const { makeExecutableSchema } = require(`graphql-tools`)
const glue = require(`schemaglue`)
const { schema, resolver } = glue(`src/routes/graphql`)
const { ApolloServer } = require(`apollo-server`)

const merged = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolver
})

const server = new ApolloServer({ typeDefs: schema, resolvers: resolver })

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})

router.use(
    `/api/graphql`,
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema: merged,
        graphiql: true
    })
)

module.exports = router
