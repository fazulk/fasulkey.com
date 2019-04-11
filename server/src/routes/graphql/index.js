const router = require(`express`).Router()
const expressGraphQL = require(`express-graphql`)
const bodyParser = require(`body-parser`)
const cors = require(`cors`)
const schema = app_require(`graphql`)

router.use(
    `/graphql`,
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
)

module.exports = router
