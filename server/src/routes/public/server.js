const Router = require(`koa-joi-router`)
const Joi = Router.Joi.extend(require(`@hapi/joi-date`))
const SERVER_CONTROLLER = require(`../../controllers/server.controller`)

const routes = [
    {
        method: `get`,
        path: `/health-check`,
        handler: SERVER_CONTROLLER.healthCheck
    },
    {
        method: `get`,
        path: `/`,
        handler: SERVER_CONTROLLER.redirect
    }
]

module.exports = routes
