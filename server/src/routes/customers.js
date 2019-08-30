const Router = require(`koa-joi-router`)
const Joi = Router.Joi.extend(require(`@hapi/joi-date`))
const CUSTOMER_CONTROLLER = require(`../controllers/customer.controller`)

let router = new Router()

router.route({
    method: `get`,
    path: `/customer`,
    handler: CUSTOMER_CONTROLLER.getCustomer
})

console.log(router)

module.exports = router

// router.get(`/`, ctx => (ctx.status = 200))

// router.get(`/api/test-service`, ctx => {
//     ctx.status = 200
//     ctx.body = `API UP ${new Date()}`
// })

// module.exports = router
