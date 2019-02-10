import graphqlTools from 'graphql-tools'
const makeExecutableSchema = graphqlTools.makeExecutableSchema

import typeDefs from './types'
import resolvers from './resolvers'

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema
