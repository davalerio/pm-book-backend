import { CustomerClaimModel } from '../models/customers-claims.model.js'

export const FormEmailController = {
  formEmail: async (req, res) => {
    try {
      const data = req.body
      console.log('Data:', data)
      const customerClaim = await CustomerClaimModel.customerClaim(data)
      console.log('Customer Claim registrado', customerClaim)
      res.status(200).json({ success: true, message: 'Formulario registrado' })
    } catch (error) {
      console.error('Error al registrar formulario:', error)
      res.status(500).json({ success: false, message: 'Error al registrar formulario' })
    }
  }
}
