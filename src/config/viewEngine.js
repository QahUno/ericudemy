function configViewEngine(app) {
  app.set('views', './src/views')
  app.set('view engine', 'ejs')
}

export default configViewEngine