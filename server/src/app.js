import '@babel/polyfill/noConflict'
import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import apis from './routes'
import path from 'path'

const MONGO_CONNECTION = process.env.DB_CONNECTION

const app = express()
const URL = `http://localhost`
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

app.use(apis)

app.use(express.static(path.join(__dirname, `../public`)))
app.get(`*`, (req, res) => {
    res.sendFile(path.join(__dirname + `../public/index.html`))
})

app.listen(PORT, () => {
    console.log(`Listening on ${URL}:${PORT}`)
})

export default app
