import { Router } from 'express'
import { MallController } from '../controllers/mallsController.js'

const router = Router()

// Listar registros
router.get('/', MallController.findAll)

export default router
