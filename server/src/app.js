'use strict'
require(`dotenv`).config()
const Koa = require(`koa`)
const morgan = require(`koa-morgan`)
const koaBody = require(`koa-body`)
const mongoose = require(`mongoose`)
const helmet = require(`koa-helmet`)
const router = require(`./routes`)
const graphql = require(`./graphql`)
const app = new Koa()
const MONGO_CONNECTION = process.env.DB_CONNECTION

// Connect to MongoDB through Mongoose.
mongoose
    .connect(MONGO_CONNECTION, {
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(() => console.log(`MongoDB connected`))
    .catch(err => {
        console.error(`Error connecting to MongoDB`, err)
        process.exit(1)
    })

// Error Handling
app.use(async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.status = 400
        ctx.body = `UH OHHHH: ${err.message}`
        console.log(`NO WAY JOSE`, err.message)
    }
})

// Response Time
app.use(async (ctx, next) => {
    console.log(`started tracking reponse time`)
    const started = Date.now()
    await next()
    const ellapsed = Date.now() - started + `ms`
    console.log(`Response time is:`, ellapsed)
    ctx.set(`X-ResponseTime`, ellapsed)
})

app.use(morgan(`combined`))
app.use(helmet())
app.use(koaBody())
graphql.applyMiddleware({ app })
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3030, () =>
    console.log(`🚀  App listening on http://localhost:3030`)
)
