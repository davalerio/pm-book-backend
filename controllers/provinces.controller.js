import { ProvinceModel } from '../models/provinces.model.js'

export const ProvinceController = {
  // Listar registros
  findAll: async (req, res) => {
    try {
      const rows = await ProvinceModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  },

  // Listar registro por ID FOREIGN KEY
  findByID: async (req, res) => {
    try {
      const { id } = req.params
      const rows = await ProvinceModel.findByID(id)
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  }
}
