import { Router } from 'express'
import { AgencyController } from '../controllers/agencies.controller.js'

const router = Router()

// Listar registros
router.get('/', AgencyController.findAll)

// Listar registros por ID
router.get('/:id', AgencyController.findByID)

export default router
