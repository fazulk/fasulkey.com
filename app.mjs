import dotenv from 'dotenv'
dotenv.config()
import express from'express';
import path from'path'
import cookieParser from'cookie-parser'
import logger from'morgan'

import indexRouter from'./routes/index'
import usersRouter from'./routes/users'

const FILENAME = typeof __filename !== 'undefined' ? __filename : (/^ +at (?:file:\/*(?=\/)|)(.*?):\d+:\d+$/m.exec(Error().stack) || '')[1];
const DIRNAME = typeof __dirname !== 'undefined' ? __dirname : FILENAME.replace(/[\/\\].*?$/, '');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(DIRNAME, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


const connection = process.env.DB_CONNECTION


export default app
