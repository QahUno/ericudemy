import homeRouter from './home.route.js'

function routing(app) {
  app.use('/', homeRouter)
}

export default routing