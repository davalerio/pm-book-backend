import { DetailClaimModel } from '../models/details-claims.model.js'

export const DetailClaimController = {
  // Listar registros
  findAll: async (req, res) => {
    try {
      const rows = await DetailClaimModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  },

  // Listar registros por ID
  findByDocumentNum: async (req, res) => {
    try {
      const { documentNum } = req.params
      const row = await DetailClaimModel.findByDocumentNum(documentNum)
      return res.status(200).json(row)
    } catch (error) {
      console.log(error)
    }
  },

  // Crear registro
  detailClaim: async (req, res) => {
    try {
      const { documentId, documentNum, serviceId, amount, claimsId, day, hour, agencyId, message } = req.body
      const row = await DetailClaimModel.detailClaim(documentId, documentNum, serviceId, amount, claimsId, day, hour, agencyId, message)
      return res.status(200).json(row)
    } catch (error) {
      console.log(error)
    }
  }
}
