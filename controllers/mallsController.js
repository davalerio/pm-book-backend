import { MallModel } from '../models/mall.js'

// Listar registros
export const MallController =
{
  findAll: async (req, res) => {
    try {
      const rows = await MallModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  }
}
