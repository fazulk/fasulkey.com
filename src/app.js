import "@babel/polyfill";
import dotenv from 'dotenv'
dotenv.config()
import regeneratorRuntime from "regenerator-runtime";
import express from 'express'
import expressGraphQL from 'express-graphql'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'
import schema from './graphql'

const MONGO_CONNECTION = process.env.DB_CONNECTION

const FILENAME =
    typeof __filename !== `undefined`
        ? __filename
        : (/^ +at (?:file:\/*(?=\/)|)(.*?):\d+:\d+$/m.exec(Error().stack) ||
              ``)[1]
const DIRNAME =
    typeof __dirname !== `undefined`
        ? __dirname
        : FILENAME.replace(/[\/\\].*?$/, ``)

const app = express()
const URL = `http://localhost`
const PORT = 3001

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
app.use(express.static(path.join(DIRNAME, `public`)))
app.use(cors())

app.use(
    `/graphql`,
    cors(),
    bodyParser.json(),
    expressGraphQL({
        schema,
        graphiql: true
    })
)

app.listen(PORT, () => {
    console.log(`Listening on ${URL}:${PORT}`)
})

export default app
