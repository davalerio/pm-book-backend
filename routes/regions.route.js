import { Router } from 'express'
import { RegionController } from '../controllers/regions.controller.js'

const router = Router()

// Listar registros
router.get('/', RegionController.findAll)

export default router
