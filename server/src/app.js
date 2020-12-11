import Koa from 'koa'
import graphql from './api/graphql.js'
import cors from '@koa/cors'
const app = new Koa()

const PORT = 3000

app.use(cors())
graphql(app)

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`))
