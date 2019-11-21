'use strict'
require(`dotenv`).config()
const Koa = require(`koa`)
const morgan = require(`koa-morgan`)
const koaBody = require(`koa-body`)
const mongoose = require(`mongoose`)
const helmet = require(`koa-helmet`)
const Router = require(`./router`)
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
        // Exit application if error
        process.exit(1)
    })

// Global Error Handling
app.use(async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.status = 400
        ctx.body = `Error: ${err.message}`
        console.error(`Error`, err.message)
    }
})

app.use(morgan(`combined`))
app.use(helmet())
app.use(koaBody())

//Add Router
app.use(Router.Public.middleware())
app.use(Router.Private.middleware())

app.listen(process.env.PORT || 3000, () =>
    console.log(
        `🚀  App listening on http://localhost:${process.env.PORT || 3000}`
    )
)
