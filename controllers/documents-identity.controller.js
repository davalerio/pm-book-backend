import { DocumentIdentityModel } from '../models/documents-identity.model.js'

export const DocumentIdentityController = {
  // Listar registros
  findAll: async (req, res) => {
    try {
      const rows = await DocumentIdentityModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  },

  // Listar registros por ID
  findByID: async (req, res) => {
    try {
      const { id } = req.params
      const rows = await DocumentIdentityModel.findByID(id)
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  }
}
