import { db } from '../config/db.js'

const tableName = 'details_claims'
const queries = {
  findAll: `SELECT * FROM ${tableName}`,
  findByDocumentNum: `SELECT * FROM ${tableName} WHERE document_num = ?`,
  detailClaim: `INSERT INTO ${tableName} SET document_id = ?, document_num = ?, service_id = ?, amount = ?, claims_id = ?, day = ?, hour = ?, agency_id = ?, message = ?`
}

export const DetailClaimModel = {
  // Listar registros
  findAll: async () => {
    try {
      const [rows] = await db.query(queries.findAll)
      console.log(rows)
      return rows
    } catch (error) {
      console.error(error)
    }
  },

  // Listar registros por ID
  findByDocumentNum: async (documentNum) => {
    try {
      const [rows] = await db.query(queries.findByDocumentNum, [documentNum])
      return rows[0]
    } catch (error) {
      console.error(error)
    }
  },

  // Crear registro
  detailClaim: async (documentId, documentNum, serviceId, amount, claimsId, day, hour, agencyId, message) => {
    try {
      const [rows] = await db.query(queries.detailClaim, [documentId, documentNum, serviceId, amount, claimsId, day, hour, agencyId, message])
      return rows
    } catch (error) {
      console.error(error)
    }
  }
}
