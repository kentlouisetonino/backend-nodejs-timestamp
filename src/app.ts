import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import HomeRouter from './router/HomeRouter'
import TimestampRouter from './router/TimestampRouter'

const app = express()

// * middlewares
app.use(morgan('tiny'))
app.use(cors({ optionsSuccessStatus: 200 })) // * some legacy browsers choke on 204
app.use(express.static('public')) // * http://expressjs.com/en/starter/static-files.html

// * endpoints
app.use('/', HomeRouter)
app.use('/api', TimestampRouter)

export default app
