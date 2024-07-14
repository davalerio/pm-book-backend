import { CustomerClaimModel } from '../models/customers-claims.model.js'

export const CustomerClaimController = {
  // Listar registros
  findAll: async (req, res) => {
    try {
      const rows = await CustomerClaimModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  },

  // Listar registros por ID
  findById: async (req, res) => {
    try {
      const { id } = req.params
      const row = await CustomerClaimModel.findById(id)
      return res.status(200).json(row)
    } catch (error) {
      console.log(error)
    }
  },

  // Crear registro
  customerClaim: async (req, res) => {
    try {
      const { personId, documentId, documentNum, firstname, secondname, firstlastname, secondlastname } = req.body
      const row = await CustomerClaimModel.customerClaim(personId, documentId, documentNum, firstname, secondname, firstlastname, secondlastname)
      return res.status(200).json(row)
    } catch (error) {
      console.log(error)
    }
  }
}
