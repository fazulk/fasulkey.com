global.app_require = name => require(__dirname + `/` + name)
require(`dotenv`).config()
const express = require(`express`)
const mongoose = require(`mongoose`)
const cors = require(`cors`)
const cookieParser = require(`cookie-parser`)
const logger = require(`morgan`)
const router = require(`./routes`)
const path = require(`path`)

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

app.use(router)

app.use(express.static(path.join(__dirname, `../public`)))

app.get(`*`, (req, res) => {
    res.sendFile(`index.html`, { root: path.join(__dirname, `../public`) })
})

app.listen(PORT, () => {
    console.log(`Listening on ${SERVER_URL}:${PORT}`)
})

module.exports = app
