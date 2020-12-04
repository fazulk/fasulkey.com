const bodyParser = require(`body-parser`)
const routes = require(`./routes.js`)
module.exports = app => {
    app.use(bodyParser.json())
    routes(app)
}
