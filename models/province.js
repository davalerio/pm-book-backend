import { db } from '../config/db.js'

const tableName = 'ub_province'
const queries = {
  findAll: `SELECT * FROM ${tableName}`,
  findByID: `SELECT * FROM ${tableName} WHERE department_id = ?`
}

export const ProvinceModel = {
  // Listar regsitros
  findAll: async () => {
    try {
      const [rows] = await db.query(queries.findAll)
      return rows
    } catch (error) {
      console.error(error)
    }
  },
  // Listar registro por ID FOREIGN KEY
  findByID: async (id) => {
    try {
      const [rows] = await db.query(queries.findByID, [id])
      return rows
    } catch (error) {
      console.error(error)
    }
  }
}
