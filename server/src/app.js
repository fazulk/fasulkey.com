'use strict'
global.app_require = name => require(__dirname + `/` + name)

require(`dotenv`).config()
const express = require(`express`)
const mongoose = require(`mongoose`)
const cors = require(`cors`)
const cookieParser = require(`cookie-parser`)
const logger = require(`morgan`)
const router = require(`./routes`)
const path = require(`path`)
const history = require(`connect-history-api-fallback`)
const serveStatic = require(`serve-static`)

const MONGO_CONNECTION = process.env.DB_CONNECTION

const app = express()
const SERVER_URL = `http://localhost`
const PORT = 3030

// Connect to MongoDB with Mongoose.
mongoose
    .connect(MONGO_CONNECTION, {
        useCreateIndex: true,
        useNewUrlParser: true
    })
    .then(() => console.log(`MongoDB connected`))
    .catch(err => console.log(err))

app.use(logger(`dev`))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(cors())

app.use(`/react`, express.static(path.join(__dirname, `../../react_ui/build`)))
app.use(router)

app.use(
    serveStatic(path.join(__dirname, `../../vue_ui/dist`), {
        fallthrough: true
    })
)

app.listen(PORT, () => {
    console.log(`Listening on ${SERVER_URL}:${PORT}`)
})

module.exports = app
