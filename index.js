import express from 'express'
import cors from 'cors'
import colors from 'colors'

// Import Routes
import DocumentIdentityRoute from './routes/documents-identity.route.js'
import AgencyRoute from './routes/agencies.route.js'
import ServiceRoute from './routes/services.route.js'
import ClaimsTypeRoute from './routes/claims-type.route.js'
import CustomerClaimRoute from './routes/customers-claims.route.js'
import CustomerAttributeRoute from './routes/customers-attributes.route.js'
import DetailClaimRoute from './routes/details-claims.route.js'

import requestHistoryRouter from './routes/requestsHistory.js'
// Ubigeo
import RegionRoute from './routes/regions.route.js'
import ProvinceRoute from './routes/provinces.route.js'
import DistrictRoute from './routes/districts.route.js'
// Email
import emailRouter from './routes/email.routes.js'

const app = express()

// Middlerwares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Routes
app.use('/api/v1/documents-identity', DocumentIdentityRoute)
app.use('/api/v1/agencies', AgencyRoute)
app.use('/api/v1/services', ServiceRoute)
app.use('/api/v1/claims-type', ClaimsTypeRoute)
app.use('/api/v1/customers-claims', CustomerClaimRoute)
app.use('/api/v1/customers-attributes', CustomerAttributeRoute)
app.use('/api/v1/details-claims', DetailClaimRoute)

app.use('/api/v1/requests-history', requestHistoryRouter)
// Routes ubigeo
app.use('/api/v1/regions', RegionRoute)
app.use('/api/v1/provinces', ProvinceRoute)
app.use('/api/v1/districts', DistrictRoute)
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
