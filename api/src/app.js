const Koa = require(`koa`)
const Router = require(`@koa/router`)
const cors = require(`@koa/cors`)

const app = new Koa()
const router = new Router()

app.use(cors(`*`))
app.use(router.routes()).use(router.allowedMethods())

app.listen({ port: 3000 }, () =>
    console.log(`🚀 Server ready at http://localhost:3000`)
)
