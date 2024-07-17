import { Router } from 'express'
import { FormEmailController } from '../controllers/form-email.controller.js'

const router = Router()

// Registrar formulario
router.post('/', FormEmailController.formEmail)

export default router
