import express from 'express'
import dotenv from 'dotenv'
import expressEjsLayouts from 'express-ejs-layouts'
import methodOverride from 'method-override'

function configApp(app) {
  // set static path
  app.use(express.static('src/public'))
  // set view engine
  app.set('views', './src/views')
  app.set('view engine', 'ejs')
  // set ejs template layout
  app.use(expressEjsLayouts)
  app.set('layout', 'layouts/main')
  // load environment variables
  dotenv.config()
  // body-parser
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  // override POST with DELETE, PUT, PATCH
  app.use(methodOverride('_method'))
}

export default configApp