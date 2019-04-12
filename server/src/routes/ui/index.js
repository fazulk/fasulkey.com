const express = require(`express`)
const router = express.Router()
const path = require(`path`)
const serveStatic = require(`serve-static`)

// serve react UI
router.use(
    `/react`,
    express.static(path.join(__dirname, `../../../../react_ui/build`))
)

// serve vue UI (default)
router.use(
    serveStatic(path.join(__dirname, `../../../../vue_ui/dist`), {
        fallthrough: true
    })
)

module.exports = router
