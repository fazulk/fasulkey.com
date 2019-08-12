const router = require(`express`).Router()
const subRoutes = app_require(`routes/require_all_routes`)(__dirname)

router.use(`/`, subRoutes)

module.exports = router
