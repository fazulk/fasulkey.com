const router = require(`express`).Router()

router.get(`/test`, (req, res) => {
    res.sendStatus(200)
})

module.exports = router
