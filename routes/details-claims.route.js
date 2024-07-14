import { Router } from 'express'
import { DetailClaimController } from '../controllers/details-claims.controller.js'

const router = Router()

// Listar registros
router.get('/', DetailClaimController.findAll)

// Listar registros por ID
router.get('/:documentNum', DetailClaimController.findByDocumentNum)

// Crear registro
router.post('/', DetailClaimController.detailClaim)

export default router
