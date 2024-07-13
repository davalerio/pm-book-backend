import { Router } from 'express'
import { RequestHistoryController } from '../controllers/requestsHistoryController.js'

const router = Router()

// Listar registros
router.get('/', RequestHistoryController.findAll)

// Cantidad de documentos
router.get('/lastclaimcode', RequestHistoryController.lastClaimCode)

// Registrar formulario
router.post('/', RequestHistoryController.insertForm)

export default router
