import express from 'express'
import configApp from './config/index.js'
import routing from './routes/index.js'

const app = express()

configApp(app)
routing(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT} ...`)
})