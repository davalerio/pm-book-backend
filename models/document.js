import { db } from '../config/db.js'

const tableName = 'document'
const queries = {
  findAll: `SELECT * FROM ${tableName} WHERE state = 1`
}

export const DocumentModel = {
  findAll: async () => {
    try {
      const [rows] = await db.query(queries.findAll)
      return rows
    } catch (error) {
      console.error(error)
    }
  }
}
