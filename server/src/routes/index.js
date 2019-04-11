const router = require(`express`).Router()
const subRoutes = require(`./require_all_routes`)(__dirname)

router.use(`/`, subRoutes)

module.exports = router
