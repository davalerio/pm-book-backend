import { Router } from 'express'
import { DocumentController } from '../controllers/documentsController.js'

const router = Router()

// Listar registros
router.get('/', DocumentController.findAll)

export default router
