import express from 'express'
import configApp from './config/app'
import routing from './routes'
import db from './config/db'

const app = express()

db.connect()
configApp(app)
routing(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT} ...`)
})