import nodeMailer from 'nodemailer'

const sendEmail = (req, res) => {
  const body = req.body
  const transporter = nodeMailer.createTransport({
    host: 'smtp.office365.com',
    auth: {
      user: 'daniel.valerio@perumoney.pe',
      pass: 'SopWiener7809'
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  const mailOptions = {
    from: "'Raclamos Perumoney' <daniel.valerio@perumoney.pe>",
    to: body.email,
    subject: 'Libro de reclamaciones virtual',
    html: '<h1>MENSAJE ENVIADO VSCODE</h1>'
  }

  transporter.sendMail(mailOptions, (error, result) => {
    if (error) {
      res.status(500).send(error.message)
    } else {
      console.log('Send email successfull')
      res.status(200).json(req.body)
    }
  })
}
export const EmailController = { sendEmail }
