import { db } from '../config/db.js'

const tableName = 'service'
const queries = {
  findAll: `SELECT * FROM ${tableName} WHERE state = 1`
}

export const ServiceModel = {
  findAll: async () => {
    try {
      const [rows] = await db.query(queries.findAll)
      return rows
    } catch (error) {
      console.error(error)
    }
  }
}
