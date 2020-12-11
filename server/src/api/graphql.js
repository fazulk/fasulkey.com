import fs from 'fs'
import gt from 'graphql-tools'
import ask from 'apollo-server-koa'
import { resumeCol } from '../data/index.js'
import { resumeRes } from './resolvers/resume.js'

const { makeExecutableSchema } = gt
const { ApolloServer } = ask

const types = fs.readFileSync(`src/api/types.gql`)
const query = fs.readFileSync(`src/api/query.gql`)
const mutation = fs.readFileSync(`src/api/mutation.gql`)

export default app => {
    const server = new ApolloServer({
        schema: makeExecutableSchema({
            typeDefs: [types.toString(), query.toString(), mutation.toString()],
            resolvers: [resumeRes]
        }),
        context: ctx => {
            return {
                ctx,
                db: {
                    resumeCol
                }
            }
        }
    })
    server.applyMiddleware({ app })
}
