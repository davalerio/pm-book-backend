import { DistrictModel } from '../models/districts.model.js'

export const DistrictController = {
  // Listar registros
  findAll: async (req, res) => {
    try {
      const rows = await DistrictModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  },

  // Listar registro por ID FOREIGN KEY
  findByID: async (req, res) => {
    try {
      const { id } = req.params
      const rows = await DistrictModel.findByID(id)
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  }
}
