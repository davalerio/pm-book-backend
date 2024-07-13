import { Router } from 'express'
import { AgencyController } from '../controllers/agenciesController.js'

const router = Router()

// Listar registros
router.get('/', AgencyController.findAll)

export default router
