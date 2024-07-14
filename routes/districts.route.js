import { Router } from 'express'
import { DistrictController } from '../controllers/districts.controller.js'

const router = Router()

// Listar registros
router.get('/', DistrictController.findAll)
// Listar registros por ID FOREIGN KEY
router.get('/:id', DistrictController.findByID)

export default router
