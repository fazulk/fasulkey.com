const Router = require(`koa-joi-router`)
const Joi = Router.Joi.extend(require(`@hapi/joi-date`))
const SERVER_CONTROLLER = require(`../../controllers/server.controller`)

const routes = [
    {
        method: `get`,
        path: `/private-check`,
        handler: SERVER_CONTROLLER.privateCheck
    }
]

module.exports = routes
