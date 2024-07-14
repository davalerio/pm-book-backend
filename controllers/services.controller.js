import { ServiceModel } from '../models/services.model.js'

// Listar registros
export const ServiceController =
{
  findAll: async (req, res) => {
    try {
      const rows = await ServiceModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  },
  findByID: async (req, res) => {
    try {
      const { id } = req.params
      const row = await ServiceModel.findByID(id)
      return res.status(200).json(row)
    } catch (error) {
      console.log(error)
    }
  }
}
