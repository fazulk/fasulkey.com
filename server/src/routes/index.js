const Router = require(`koa-router`)
const router = new Router()

router.get(`/`, ctx => (ctx.status = 200))

router.get(`/todos`, ctx => {
    ctx.status = 200
    ctx.body = [
        {
            id: 1,
            text: `Switch to Koa`,
            completed: true
        },
        {
            id: 2,
            text: `???`,
            completed: true
        },
        {
            id: 3,
            text: `Profit`,
            completed: true
        }
    ]
})

router.get(`/tests`, ctx => {
    console.log(`ctx`, ctx.request.href)
    ctx.status = 200
    ctx.body = `you did it!`
})

module.exports = router
