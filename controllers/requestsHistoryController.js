import { RequestHistoryModel } from '../models/requestHistory.js'

export const RequestHistoryController = {
  // Listar registros
  findAll: async (req, res) => {
    try {
      const rows = await RequestHistoryModel.findAll()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  },

  //  Ultimo codigo de reclamo
  lastClaimCode: async (req, res) => {
    try {
      const rows = await RequestHistoryModel.lastClaimCode()
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  },

  // Registrar formulario
  insertForm: async (req, res) => {
    const {
      serie, correlative, ruc, business, document_id, document_num, first_name, father_surname, mother_surname, email, phone, address, department_id, province_id, district_id, service_id, amount, request_id, day, hour, agency_id, message
    } = req.body
    try {
      const rows = await RequestHistoryModel.insertForm(serie, correlative, ruc, business, document_id, document_num, first_name, father_surname, mother_surname, email, phone, address, department_id, province_id, district_id, service_id, amount, request_id, day, hour, agency_id, message)
      return res.status(200).json(rows)
    } catch (error) {
      console.log(error)
    }
  }
}
