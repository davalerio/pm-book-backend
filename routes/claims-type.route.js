import { Router } from 'express'
import { ClaimTypeController } from '../controllers/claims-type.controller.js'

const router = Router()

// Listar registros
router.get('/', ClaimTypeController.findAll)

// Listar registros por ID
router.get('/:id', ClaimTypeController.findByID)

export default router
