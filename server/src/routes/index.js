const Router = require(`koa-router`)
const router = new Router()
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

router.post(`/tests`, ctx => {
    console.log(ctx.request.body)
    ctx.status = 200
    ctx.body = `you did it!`
})

module.exports = router
