import express from 'express'
import homeController from '../controllers/HomeController.js'

const router = express.Router()

router.get('/', homeController.index)
router.get('/about', homeController.about)
router.get('/user', homeController.user)

export default router