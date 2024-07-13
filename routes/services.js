import { Router } from 'express'
import { ServiceController } from '../controllers/servicesController.js'

const router = Router()

// Listar registros
router.get('/', ServiceController.findAll)

export default router
