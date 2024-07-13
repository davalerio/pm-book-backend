import { db } from '../config/db.js'

const tableName = 'request_history'
const queries = {
  findAll: `SELECT * FROM ${tableName} WHERE state = 1`,
  lastClaimCode: `SELECT MAX(correlative) AS correlative FROM ${tableName}`,
  insertForm: `INSERT INTO ${tableName} (serie,correlative,ruc,business,document_id,document_num,first_name,father_surname,mother_surname,email,phone,address,department_id,province_id,district_id,service_id,amount,request_id,day,hour,agency_id,message) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
}

// Listar registros
export const RequestHistoryModel = {
  // Listar registros
  findAll: async () => {
    try {
      const [rows] = await db.query(queries.findAll)
      return rows
    } catch (error) {
      console.error(error)
    }
  },
  // Ultimo codigo de reclamo
  lastClaimCode: async () => {
    try {
      const [rows] = await db.query(queries.lastClaimCode)
      return rows
    } catch (error) {
      console.error(error)
    }
  },

  // Registrar formulario
  insertForm: async (serie, correlative, ruc, business, document_id, document_num, first_name, father_surname, mother_surname, email, phone, address, department_id, province_id, district_id, service_id, amount, request_id, day, hour, agency_id, message) => {
    try {
      const [rows] = await db.query(queries.insertForm, [serie, correlative, ruc, business, document_id, document_num, first_name, father_surname, mother_surname, email, phone, address, department_id, province_id, district_id, service_id, amount, request_id, day, hour, agency_id, message])
      return rows
    } catch (error) {
      console.error(error)
    }
  }
}
