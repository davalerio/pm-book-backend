import { ClaimTypeModel } from '../models/claims-type.model.js'

export const ClaimTypeController = {
  // Listar registros
  findAll: async (req, res) => {
    try {
      const rows = await ClaimTypeModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  },

  // Listar registros por ID
  findByID: async (req, res) => {
    try {
      const { id } = req.params
      const row = await ClaimTypeModel.findByID(id)
      return res.status(200).json(row)
    } catch (error) {
      console.log(error)
    }
  }
}
