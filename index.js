import express from 'express'
import cors from 'cors'
import colors from 'colors'

// Import Routes
import documentRouter from './routes/documents.js'
import agencyRouter from './routes/agencies.js'
import mallRouter from './routes/malls.js'
import serviceRouter from './routes/services.js'
import requestRouter from './routes/requests.js'
import requestHistoryRouter from './routes/requestsHistory.js'
// Ubigeo
import departmentRouter from './routes/departments.js'
import provinceRouter from './routes/provinces.js'
import districtRouter from './routes/districts.js'
// Email
import emailRouter from './routes/email.routes.js'

const app = express()

// Middlerwares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Routes
app.use('/api/v1/documents', documentRouter)
app.use('/api/v1/agencies', agencyRouter)
app.use('/api/v1/malls', mallRouter)
app.use('/api/v1/services', serviceRouter)
app.use('/api/v1/requests', requestRouter)
app.use('/api/v1/requests-history', requestHistoryRouter)
// Routes ubigeo
app.use('/api/v1/departments', departmentRouter)
app.use('/api/v1/provinces', provinceRouter)
app.use('/api/v1/districts', districtRouter)
// Email
app.use('/api/v1/sendemail', emailRouter)

// Settings
const PORT = process.env.PORT || 3000

const message = {
  _title: colors.blue('SERVER RUNNING!🚀'),
  _port: colors.green('✅ PORT: ') + PORT
}

// Running Server
app.listen(PORT, () => {
  console.log(`
${message._title}
${message._port}`)
})
