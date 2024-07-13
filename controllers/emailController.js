import nodeMailer from 'nodemailer'

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

    const mailOptions = {
      from: "'Raclamos Perumoney' <daniel.valerio@perumoney.pe>",
      to: body.email,
      subject: 'Libro de reclamaciones virtual',
      html: `
      <html>
        <body>
          <div style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; width: 860px; margin: 30px auto;">
            <div style="border: 1px solid #000;">
              <div style="text-align: center; background-color: #000;">
                <img
                  src="https://www.perumoney.pe/wp-content/uploads/2021/07/logo-perumoney.png"
                  alt="Perumoney"
                  style="width: 200px; height: 100px;"
                />
              </div>
              <div style="padding: 20px;">
                <h2>Libro de reclamaciones virtual</h2>
                <p>Gracias -> ${body.email}</p>
                <p>Estimado(a) ${body.firstname} ${body.lastnamefather} ${body.lastnamemother},</p>
                <p>Se ha registrado su reclamo en nuestro sistema.</p>
                <p>En breve, nos comunicaremos con usted para brindarle una respuesta.</p>
                <p>Gracias por confiar en Perumoney.</p>
                <p>Saludos cordiales,</p>
                <p>Equipo de Perumoney</p>
              </div>
            </div>
          </div>
        </body>
      </html>
      `
    }

    await transporter.sendMail(mailOptions)
    res.status(200).json({ success: true, message: 'Email enviado' })
  } catch (error) {
    console.error('Error al enviar el email:', error)
    res.status(500).json({ success: false, message: 'Error al enviaro el correo electrónico' })
  }
}

export const EmailController = { sendEmail }
