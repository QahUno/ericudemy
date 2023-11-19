import express from 'express'

function configStaticPath(app) {
  app.use(express.static('src/public'))
}

export default configStaticPath