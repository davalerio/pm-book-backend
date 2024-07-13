import { ServiceModel } from '../models/service.js'

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
  }
}
