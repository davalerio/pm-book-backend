import { Router } from 'express'
import { DepartmentController } from '../controllers/departmentsController.js'

const router = Router()

// Listar registros
router.get('/', DepartmentController.findAll)

export default router
