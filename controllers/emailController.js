import nodeMailer from 'nodemailer'
import ejs from 'ejs'
import fs from 'fs'

const templatePath = './template/emailTemplate.ejs'
const templateString = fs.readFileSync(templatePath, 'utf-8')

const sendEmail = async (req, res) => {
  try {
    const body = req.body
    const transporter = nodeMailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: 'SSLv3'
      }
    })

    const html = ejs.render(templateString, {
      email: body.email,
      history_id: body.history_id,
      typedoc: body.typedoc,
      numberdoc: body.numberdoc,
      firstname: body.firstname,
      lastnamefather: body.lastnamefather,
      lastnamemother: body.lastnamemother,
      phone: body.phone,
      address: body.address,
      departament: body.departament,
      province: body.province,
      district: body.district,
      service: body.service,
      amount: body.amount,
      typerequest: body.typerequest,
      day: body.day,
      hour: body.hour,
      agency: body.agency,
      message: body.message
    })

    const mailOptions = {
      from: "'Raclamos Perumoney' <daniel.valerio@perumoney.pe>",
      to: body.email,
      subject: 'Libro de reclamaciones virtual',
      html
    }

    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true, message: 'Email enviado' })
  } catch (error) {
    console.error('Error al enviar el email:', error)
    res.status(500).json({ success: false, message: 'Error al enviar el correo electrónico' })
  }
}

export const EmailController = { sendEmail }
