import { Router } from 'express'
import { DocumentIdentityController } from '../controllers/documents-identity.controller.js'

const router = Router()

// Listar registros
router.get('/', DocumentIdentityController.findAll)

// Listar registros por ID
router.get('/:id', DocumentIdentityController.findByID)

export default router
