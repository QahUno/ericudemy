import express from 'express'
import userController from '../controllers/UserController.js'

const router = express.Router()

router.get('/', userController.index)
router.post('/create', userController.create)
router.delete('/delete/:id', userController.delete)
router.get('/editPage/:id', userController.editPage)
router.put('/edit/:id', userController.edit)

export default router