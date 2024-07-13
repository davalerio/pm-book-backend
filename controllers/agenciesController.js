import { AgencyModel } from '../models/agency.js'

// Listar registros
export const AgencyController =
{
  findAll: async (req, res) => {
    try {
      const rows = await AgencyModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  }
}
