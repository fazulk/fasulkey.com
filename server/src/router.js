const Router = require(`koa-joi-router`)
const publicRouter = new Router()
const privateRouter = new Router()

// Recursively Add all Public Routes
const publicRoutes = require(`require-all`)({
    dirname: __dirname + `/routes/public`,
    recursive: true
})

// Recursively Add all Private Routes
const privateRoutes = require(`require-all`)({
    dirname: __dirname + `/routes/private`,
    recursive: true
})

const returnRoutes = required => {
    const routeArray = []

    for (const iterator in required) {
        routeArray.push(...required[iterator])
    }

    return routeArray
}

publicRouter.route(returnRoutes(publicRoutes))
privateRouter.route(returnRoutes(privateRoutes))

exports.Public = publicRouter
exports.Private = privateRouter
