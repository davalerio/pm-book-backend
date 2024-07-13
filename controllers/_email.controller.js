const { request, response } = require('express');
const nodeMailer = require('nodemailer');

const sendEmail = (req, res) => {
  let body = req.body;
  let transporter = nodeMailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secureConnection: false,
    secure: false,
    requireTLS: true,
    auth: {
      user: 'reclamos@perumoney.pe',
      pass: 'Nam66053', //usar la contraseña generada por el proveedor de google es unan apikey de 16 caracteres
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  //kyoxijjusvaxgxnn

  const mailOptions = {
    from: "'Raclamos Perumoney' <reclamos@perumoney.pe>",
    to: body.email,
    cc: 'daniel.valerio@perumoney.pe',
    subject: 'Libro de reclamaciones virtual',
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
    message: body.message,
    html: `
    <!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Email de recepción</title>
</head>

<body
	style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; width: 860px; margin: 30px auto;">
	<div style="border: 1px solid #000;">
		<div style="text-align: center; background-color: #000;">
			<img
				src="https://ci6.googleusercontent.com/proxy/ASAZZospsrQ6pKNKhHhvdCJmueA4_jlJpBYhwTqKAXMBKkTlmzMz2EAgMVqweGSnrdDfh679QJO9K_alM_SKsVtXypKVg7ZHSZ-3roIz0lXAXDTSdrxzPa2ZQH0yFuZS2_PXVmUYdsepNiveY5xcMaVtkdvkCDlj5VMh9xZNLriflKM8=s0-d-e1-ft#http://cdn.mcauto-images-production.sendgrid.net/7ac226d7ec0aad63/eeed62ce-bf3f-4aa5-a966-71b48b2c7bb1/200x80.png"
				alt="">
		</div>
		<div style="padding: 20px">
			<h1
				style="text-align: center; font-size: 25px; background: gold; margin: 20px auto; width: 300px; padding: 20px 10px;">
				${body.typerequest}</h1>
			<p style="text-align: center; font-size:16px; font-weight: bold;">CASO: ${body.history_id}</p>
			<p style="font-size: 22px; margin: 20px auto; width: 700px; padding: 20px 10px;">Estimado cliente,
				Hemos recibido su ${body.typerequest} y queremos asegurarle que estamos trabajando en ello.<br>
				Le recordamos que nuestro compromiso es reponder su solicitud dentro de un plazo máximo de 15 días hábiles.
				Agradecemos su paciencia y comprensión.
			</p>
			<p style="text-align: center; font-size: 25px;">
				Atentamente, Centro de Información PM.
			</p>
		</div>
		<div style="padding: 20px">
			<h1 style=" text-align: center;">Información del Registro</h1>
			<div>
				<h2 style="display: block;">Datos Personales</h2>

				<div>
					<div>
						<p style="font-weight: bold;">Tipo de documento</p>
						<p>${body.typedoc}</p>
					</div>

					<div>
						<p style="font-weight: bold;">Número</p>
						<p>${body.numberdoc}</p>
					</div>

					<div>
						<p style="font-weight: bold;">Nombres</p>
						<p>${body.firstname}</p>
					</div>

					<div>
						<p style="font-weight: bold;">Primer Apellido</p>
						<p>${body.lastnamefather}</p>
					</div>

					<div>
						<p style="font-weight: bold;">Segundo Apellido</p>
						<p>${body.lastnamemother}</p>
					</div>
				</div>

			</div>

			<div>
				<h2 style="display: block;">Datos del Contacto</h2>
				<div>
					<div>
						<p style="font-weight: bold;">Correo electrónico</p>
						<p>${body.email}</p>
					</div>

					<div>
						<p style="font-weight: bold;">Celular</p>
						<p>${body.phone}</p>
					</div>

					<div>
						<p style="font-weight: bold;">Dirección</p>
						<p>${body.address}</p>
					</div>
				</div>
				<div>
					<div style="flex: 1;">
						<p style="font-weight: bold;">Departamento</p>
						<p>${body.departament}</p>
					</div>

					<div>
						<p style="font-weight: bold;">Provincia</p>
						<p>${body.province}</p>
					</div>

					<div>
						<p style="font-weight: bold;">Distrito</p>
						<p>${body.district}</p>
					</div>
				</div>
			</div>
			<div>
				<h2 style="display: block;">Detalles del Reclamo/Queja/Sugerencia</h2>
				<div>
					<div>
						<p style="font-weight: bold;">Servicio</p>
						<p>${body.service}</p>
					</div>
					<div>
						<p style="font-weight: bold;">Monto</p>
						<p>${body.amount}</p>
					</div>

					<div>
						<p style="font-weight: bold;">Tipo</p>
						<p>${body.typerequest}</p>
					</div>

					<div>
						<p style="font-weight: bold;">Fecha</p>
						<p>${body.day}</p>
					</div>

					<div>
						<p style="font-weight: bold;">Hora</p>
						<p>${body.hour}</p>
					</div>

					<div>
						<p style="font-weight: bold;">Agencia</p>
						<p>${body.agency}</p>
					</div>
				</div>
				<div>
					<div>
						<p style="font-weight: bold;">Detalle</p>
						<p>${body.message}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</body>

</html>
    `
  };

  transporter.sendMail(mailOptions, (error, result) => {
    if (error) {
      res.status(500).send(error.message);
    } else {
      console.log('Send email successfull');
      res.status(200).json(req.body);
    }
  });
};

module.exports = {
  sendEmail,
};
