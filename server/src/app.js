import Koa from 'koa'
import graphql from './api/graphql.js'

const app = new Koa()

const PORT = 3000

graphql(app)

app.listen(PORT, () => console.log(`App listening on port: ${PORT}`))
