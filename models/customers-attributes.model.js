import { db } from '../config/db.js'

const tableName = 'customers_attributes'
const queries = {
  findAll: `SELECT * FROM ${tableName}`,
  findByDocumentNum: `SELECT * FROM ${tableName} WHERE document_num = ?`,
  customerAttribute: `INSERT INTO ${tableName} SET document_id = ?, document_num = ?, email = ?, phone = ?, address = ?, region_id = ?, province_id = ?, district_id = ?`
}

export const CustomerAttributeModel = {
  // Listar registros
  findAll: async () => {
    try {
      const [rows] = await db.query(queries.findAll)
      return rows
    } catch (error) {
      console.error(error)
    }
  },

  // Listar registros por ID
  findByDocumentNum: async (documentNum) => {
    try {
      const [rows] = await db.query(queries.findByDocumentNum, [documentNum])
      console.log(rows)
      return rows[0]
    } catch (error) {
      console.error(error)
    }
  },

  // Crear registro
  customerAttribute: async (documentId, documentNum, email, phone, address, regionId, provinceId, districtId) => {
    try {
      const [rows] = await db.query(queries.customerAttribute, [documentId, documentNum, email, phone, address, regionId, provinceId, districtId])
      return rows
    } catch (error) {
      console.error(error)
    }
  }
}
