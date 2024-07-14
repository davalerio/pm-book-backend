import { AgencyModel } from '../models/agencies.model.js'

export const AgencyController = {
  // Listar registros
  findAll: async (req, res) => {
    try {
      const rows = await AgencyModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  },

  // Listar registros por ID
  findByID: async (req, res) => {
    try {
      const { id } = req.params
      const row = await AgencyModel.findByID(id)
      return res.status(200).json(row)
    } catch (error) {
      console.log(error)
    }
  }
}
