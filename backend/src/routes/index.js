import homeRouter from './home.route.js'
import userRouter from './user.route.js'

function routing(app) {
  app.use('/', homeRouter)
  app.use('/users', userRouter)
}

export default routing