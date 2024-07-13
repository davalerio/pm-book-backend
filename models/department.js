import { db } from '../config/db.js'

const tableName = 'ub_department'
const queries = {
  findAll: `SELECT * FROM ${tableName}`
}

export const DepartmentModel = {
  findAll: async () => {
    try {
      const [rows] = await db.query(queries.findAll)
      return rows
    } catch (error) {
      console.error(error)
    }
  }
}
