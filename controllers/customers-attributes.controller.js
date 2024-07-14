import { CustomerAttributeModel } from '../models/customers-attributes.model.js'

export const CustomerAttributeController = {
  // Listar registros
  findAll: async (req, res) => {
    try {
      const rows = await CustomerAttributeModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  },

  // Listar registros por DOCUMENTO
  findByDocumentNum: async (req, res) => {
    try {
      const { documentNum } = req.params
      const row = await CustomerAttributeModel.findByDocumentNum(documentNum)
      return res.status(200).json(row)
    } catch (error) {
      console.log(error)
    }
  },

  // Crear registro
  customerAttribute: async (req, res) => {
    try {
      const { documentId, documentNum, email, phone, address, regionId, provinceId, districtId } = req.body
      const row = await CustomerAttributeModel.customerAttribute(documentId, documentNum, email, phone, address, regionId, provinceId, districtId)
      return res.status(200).json(row)
    } catch (error) {
      console.log(error)
    }
  }
}
