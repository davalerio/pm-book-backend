import { db } from '../config/db.js'

const tableName = 'claims_type'
const queries = {
  findAll: `SELECT * FROM ${tableName} WHERE state = 1`,
  findByID: `SELECT * FROM ${tableName} WHERE id = ? and state = 1`
}

export const ClaimTypeModel = {
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
  findByID: async (id) => {
    try {
      const [rows] = await db.query(queries.findByID, [id])
      return rows[0]
    } catch (error) {
      console.error(error)
    }
  }
}
