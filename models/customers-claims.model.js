import { db } from '../config/db.js'

const tableName = 'customers_claims'
const queries = {
  findAll: `SELECT * FROM ${tableName} WHERE state = 'active'`,
  findById: `SELECT * FROM ${tableName} WHERE id = ? and state = 'active'`,
  customerClaim: `INSERT INTO ${tableName} SET person_id = ?, document_id = ?, document_num = ?, firstname = ?, secondname = ?, firstlastname = ?, secondlastname = ?`
}

export const CustomerClaimModel = {
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
  findById: async (id) => {
    try {
      const [rows] = await db.query(queries.findById, [id])
      return rows[0]
    } catch (error) {
      console.error(error)
    }
  },

  // Crear registro
  customerClaim: async (personId, documentId, documentNum, firstname, secondname, firstlastname, secondlastname) => {
    try {
      const [rows] = await db.query(queries.customerClaim, [personId, documentId, documentNum, firstname, secondname, firstlastname, secondlastname])
      return rows
    } catch (error) {
      console.error(error)
    }
  }
}
