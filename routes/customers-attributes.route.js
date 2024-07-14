import { Router } from 'express'
import { CustomerAttributeController } from '../controllers/customers-attributes.controller.js'

const router = Router()

// Listar registros
router.get('/', CustomerAttributeController.findAll)

// Listar registros por ID
router.get('/:documentNum', CustomerAttributeController.findByDocumentNum)

// Crear registro
router.post('/', CustomerAttributeController.customerAttribute)

export default router
