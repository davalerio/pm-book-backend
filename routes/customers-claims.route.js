import { Router } from 'express'
import { CustomerClaimController } from '../controllers/customers-claims.controller.js'

const router = Router()

// Listar registros
router.get('/', CustomerClaimController.findAll)

// Listar registros por ID
router.get('/:id', CustomerClaimController.findById)

// Crear registro
router.post('/', CustomerClaimController.customerClaim)

export default router
