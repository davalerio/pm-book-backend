import { db } from '../config/db.js'

const tableName = 'regions'
const queries = {
  findAll: `SELECT * FROM ${tableName}`
}

export const RegionModel = {
  findAll: async () => {
    try {
      const [rows] = await db.query(queries.findAll)
      return rows
    } catch (error) {
      console.error(error)
    }
  }
}
