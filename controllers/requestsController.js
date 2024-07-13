import { RequestModel } from '../models/request.js'

// Listar registros
export const RequestController =
{
  findAll: async (req, res) => {
    try {
      const rows = await RequestModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  }
}
