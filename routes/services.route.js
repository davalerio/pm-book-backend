import { Router } from 'express'
import { ServiceController } from '../controllers/services.controller.js'

const router = Router()

// Listar registros
router.get('/', ServiceController.findAll)

// Listar registros por ID
router.get('/:id', ServiceController.findByID)

export default router
