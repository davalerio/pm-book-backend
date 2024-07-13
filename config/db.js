import 'dotenv/config'
import mysql from 'mysql2/promise'
import colors from 'colors'

const host = process.env.DB_HOST
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_NAME

export const db = mysql.createPool({
  host,
  user,
  password,
  database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

const success = {
  _title: colors.blue('GREAT!😎'),
  _hostname: colors.green('✅ HOSTNAME: ') + host,
  _db: colors.green('✅ DATABASE: ') + database
}

const errors = {
  _title: colors.red('ERROR!😞'),
  _hostname: colors.green('❌ HOSTNAME: ') + host,
  _db: colors.green('❌ DATABASE: ') + database
};

// Test de conexion
(async () => {
  try {
    await db.query('SELECT 1')
    console.log(`
${success._title}
${success._hostname}
${success._db}`)
  } catch (error) {
    console.error(`
${errors._title}
${errors._hostname}
${errors._db}`)
  }
})()
