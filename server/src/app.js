'use strict'

const fs = require(`fs`)
const Koa = require(`koa`)
const app = new Koa()
const morgan = require(`koa-morgan`)
const bodyParser = require(`koa-bodyparser`)
const router = require(`./routes`)
const accessLogStream = fs.createWriteStream(__dirname + `/access.log`, {
    flags: `a`
})

const responseTime = async (ctx, next) => {
    console.log(`started tracking reponse time`)
    const started = Date.now()
    await next()
    const ellapsed = Date.now() - started + `ms`
    console.log(`Response time is:`, ellapsed)
    ctx.set(`X-ResponseTime`, ellapsed)
}

const errorHandler = async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        ctx.status = 400
        ctx.body = `UH UOHHHH: ${err.message}`
        console.log(`NO WAY JOSE`, err.message)
    }
}

app.use(errorHandler)
app.use(bodyParser())
app.use(morgan(`combined`, { stream: accessLogStream }))
app.use(responseTime)
app.use(router.routes())
app.use(router.allowedMethods())

// Simple Promise delay
function delay(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

app.use(async (ctx, next) => {
    ctx.status = 200
    console.log(`setting status`)
    await next()
})

app.listen(3002, () =>
    console.log(`Koa app listening on http://localhost:3002`)
)
