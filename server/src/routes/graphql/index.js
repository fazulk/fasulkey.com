import express from 'express'
import expressGraphQL from 'express-graphql'
import bodyParser from 'body-parser'
import cors from 'cors'
import schema from '@graphql'

const router = express.Router()

router.use(
    `/graphql`,
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
)

export default router
