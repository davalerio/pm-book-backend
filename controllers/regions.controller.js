import { RegionModel } from '../models/regions.model.js'

// Listar registros
export const RegionController =
{
  findAll: async (req, res) => {
    try {
      const rows = await RegionModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  }
}
