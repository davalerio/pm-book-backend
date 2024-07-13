import { DocumentModel } from '../models/document.js'

// Listar registros
export const DocumentController =
{
  findAll: async (req, res) => {
    try {
      const rows = await DocumentModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  }
}
