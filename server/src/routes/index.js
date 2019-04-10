// const router = require(`express`).Router()
import express from 'express'
const router = express.Router()
import subRoutes from '@routes/require_all_subs'
;(async function() {
    router.use(`/`, await subRoutes(__dirname))
})()

export default router
