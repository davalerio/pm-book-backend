import { Router } from 'express'
import { ProvinceController } from '../controllers/provinces.controller.js'

const router = Router()

// Listar registros
router.get('/', ProvinceController.findAll)
// Listar registros por ID FOREIGN KEY
router.get('/:id', ProvinceController.findByID)

export default router
