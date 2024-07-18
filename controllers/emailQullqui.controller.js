const { request, response } = require('express');
const nodeMailer = require('nodemailer');
const express = require('express');
const router = express.Router();
const mysqlConnection = require('../config/db.js');

const sendEmail = (req, res) => {
  const query2 = 'SELECT MAX(correlative) AS correlative FROM request_history';
  mysqlConnection.query(query2, (err, data) => {
    const maxCorrelative = data[0].correlative;
    const siguiente = maxCorrelative
      ? (parseInt(maxCorrelative) + 1).toString()
      : '00001';
    // const siguiente = (parseInt(maxCorrelative) + 1).toString();
    const numerofinal = siguiente.padStart(5, '0');
    console.log(numerofinal);

    var serie = '0002';
    var correlative = numerofinal;
    var ruc = req.body.ruc;
    var business = req.body.business;
    var document_id = req.body.document_id;
    var document_num = req.body.document_num;
    var first_name = req.body.first_name;
    var father_surname = req.body.father_surname;
    var mother_surname = req.body.mother_surname;
    var email = req.body.email;
    var phone = req.body.phone;
    var address = req.body.address;
    var department_id = req.body.department_id;
    var province_id = req.body.province_id;
    var district_id = req.body.district_id;
    var service_id = req.body.service_id;
    var amount = req.body.amount;
    var request_id = req.body.request_id;
    var day = req.body.day;
    var hour = req.body.hour;
    var agency_id = req.body.agency_id;
    var message = req.body.message;

    const query = `
      INSERT INTO request_history (
        serie,
        correlative,
        ruc,
        business,
        document_id,
        document_num,
        first_name,
        father_surname,
        mother_surname,
        email,
        phone,
        address,
        department_id,
        province_id,
        district_id,
        service_id,
        amount,
        request_id,
        day,
        hour,
        agency_id,
        message) VALUES(
          '${serie}',
          '${correlative}',
          '${ruc}',
          '${business}',
          '${document_id}',
          '${document_num}',
          '${first_name}',
          '${father_surname}',
          '${mother_surname}',
          '${email}',
          '${phone}',
          '${address}',
          '${department_id}',
          '${province_id}',
          '${district_id}',
          '${service_id}',
          '${amount}',
          '${request_id}',
          '${day}',
          '${hour}',
          '${agency_id}',
          '${message}')
        `;
    mysqlConnection.query(query, (err, data2) => {
      console.log(data2);
      let transporter = nodeMailer.createTransport({
        host: 'smtp.office365.com',
        port: 587,
        secureConnection: false,
        secure: false,
        requireTLS: true,
        auth: {
          user: 'reclamos@qullqui.pe',
          pass: 'P3rumoney#2024',
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const mailOptions = {
        from: "'RECLAMOS QULLQUI' <reclamos@qullqui.pe>",
        to: email,
        bcc: 'reclamos@qullqui.pe',
        subject: request_id,
        html: `
    		<!DOCTYPE html
    		PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    	<html xmlns="http://www.w3.org/1999/xhtml">

    	<head>
    		<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    		<meta http-equiv="X-UA-Compatible" content="IE=edge">
    		<meta name="viewport" content="width=device-width, initial-scale=1.0">
    		<title>LR Virtual</title>
    	</head>

    	<body style="margin: 0; background-color: #cccccc; font-family: sans-serif;">
    		<center class="wrapper" style="width: 100%; table-layout: fixed; background-color: #cccccc; padding-bottom: 60px;">
    			<table class="main" width="100%" style="border-collapse: collapse; table-layout: fixed; background-color: #ffffff; margin: 0 auto; width: 100%; max-width: 600px; border-spacing: 0; font-family: sans-serif; color: #171a1b;" bgcolor="#ffffff">
    				<tr>
    					<td height="4" style="letter-spacing: -0.5px; background-color: #ea0c73;" bgcolor="#ea0c73"></td>
    				</tr>

    				<tr>
    					<td style="letter-spacing: -0.5px; background: #000; text-align: center;" align="center">
    						<img src="https://app.perumoney.pe/assets/media/logos/pm-logo.png" style="width: 200px">
    									</td>
    				</tr>

    				<tr>
    					<td class="title" style="text-align: center; font-size: 30px; font-weight: 600; letter-spacing: -1.5px; padding-top: 20px; padding-bottom: 20px;" align="center">
    						Libro de reclamaciones digital
    					</td>
    				</tr>

    				<tr>
    					<td class="info" style="letter-spacing: -0.5px; font-size: 14px; padding-left: 20px; padding-right: 20px; padding-top: 6px; padding-bottom: 6px;">
    						Hola <span style="font-weight: bold;">${first_name} ${father_surname};</span>
    					</td>
    				</tr>

    				<tr>
    					<td class="info" style="letter-spacing: -0.5px; font-size: 14px; padding-left: 20px; padding-right: 20px; padding-top: 6px; padding-bottom: 6px;">
    						Hemos recibido su <span style="font-weight: bold;">${request_id} ${serie} - ${correlative}</span> y queremos asegurarle que
    						estamos trabajando en ello.
    					</td>
    				</tr>

    				<tr>
    					<td class="info" style="letter-spacing: -0.5px; font-size: 14px; padding-left: 20px; padding-right: 20px; padding-top: 6px; padding-bottom: 6px;">
    						Le recordamos que nuestro compromiso es responder su solicitud dentro de un plazo máximo de 15
    						días hábiles,
    						agradecemos su paciencia y comprensión.
    					</td>
    				</tr>

    				<!-- FORMULARIO -->
    				<tr>
    					<td style="letter-spacing: -0.5px; padding-left: 20px; padding-right: 20px;">
    						<table width="100%" style="border-spacing: 0; border-collapse: collapse; table-layout: fixed; margin-top: 30px;">
    							<tr>
    								<td colspan="3" class="title" style="text-align: center; font-size: 30px; font-weight: 600; letter-spacing: -1.5px; padding-top: 20px; padding-bottom: 20px;" align="center">
    									Información del registro
    								</td>
    							</tr>
    							<tr>
    								<td colspan="3" class="form-title" style="letter-spacing: -0.5px; font-size: 14px; font-weight: 600; padding-top: 10px; padding-bottom: 10px;">Datos personales</td>
    							</tr>
    							<tr>
    								<td colspan="2" class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Tipo de documento</td>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Número documento</td>
    							</tr>
    							<tr>
    								<td colspan="2" style="letter-spacing: -0.5px;">${document_id}</td>
    								<td style="letter-spacing: -0.5px;">${document_num}</td>
    							</tr>
    							<tr>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Nombres</td>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Primer apellido</td>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Segundo apellido</td>
    							</tr>
    							<tr>
    								<td style="letter-spacing: -0.5px;">${first_name}</td>
    								<td style="letter-spacing: -0.5px;">${father_surname}</td>
    								<td style="letter-spacing: -0.5px;">${mother_surname}</td>
    							</tr>
    							<tr>
    								<td colspan="3" class="form-title" style="letter-spacing: -0.5px; font-size: 14px; font-weight: 600; padding-top: 10px; padding-bottom: 10px;">Datos de contacto</td>
    							</tr>
    							<tr>
    								<td colspan="2" class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Correo electrónico</td>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Celular</td>
    							</tr>
    							<tr>
    								<td colspan="2" style="letter-spacing: -0.5px;">${email}</td>
    								<td style="letter-spacing: -0.5px;">${phone}</td>
    							</tr>
    							<tr>
    								<td colspan="3" class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Dirección</td>
    							</tr>
    							<tr>
    								<td colspan="3" style="letter-spacing: -0.5px;">${address}</td>
    							</tr>
    							<tr>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Departamento</td>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Provincia</td>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Distrito</td>
    							</tr>
    							<tr>
    								<td style="letter-spacing: -0.5px;">${department_id}</td>
    								<td style="letter-spacing: -0.5px;">${province_id}</td>
    								<td style="letter-spacing: -0.5px;">${district_id}</td>
    							</tr>
    							<tr>
    								<td colspan="3" class="form-title" style="letter-spacing: -0.5px; font-size: 14px; font-weight: 600; padding-top: 10px; padding-bottom: 10px;">Detalles del reclamo / queja</td>
    							</tr>
    							<tr>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Servicio</td>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Monto</td>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Tipo</td>
    							</tr>
    							<tr>
    								<td style="letter-spacing: -0.5px;">${service_id}</td>
    								<td style="letter-spacing: -0.5px;">${amount}</td>
    								<td style="letter-spacing: -0.5px;">${request_id}</td>
    							</tr>
    							<tr>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Fecha</td>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Hora</td>
    								<td class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Agencia</td>
    							</tr>
    							<tr>
    								<td style="letter-spacing: -0.5px;">${day}</td>
    								<td style="letter-spacing: -0.5px;">${hour}</td>
    								<td style="letter-spacing: -0.5px;">${agency_id}</td>
    							</tr>
    							<tr>
    								<td colspan="3" class="form-label" style="letter-spacing: -0.5px; font-size: 12px; font-weight: 600;">Mensaje</td>
    							</tr>
    							<tr>
    								<td colspan="3" style="letter-spacing: -0.5px; text-align: justify; padding-bottom: 20px;" align="justify">${message}</td>
    							</tr>
    						</table>
    					</td>
    				</tr>
    				<tr>
    					<td class="info" style="letter-spacing: -0.5px; font-size: 14px; padding-left: 20px; padding-right: 20px; padding-top: 6px; padding-bottom: 6px;">Atentamente; <br> Centro de información <span style="font-weight: bold;">PERUMONEY</span>.</td>
    				</tr>
    			</table>
    		</center>
    	</body>
    	</html>
    `,
      };

      transporter.sendMail(mailOptions, (error, result) => {
        if (error) {
          console.error(error);
          res.status(500).send(error.message);
        } else {
          console.log('Send email successfull');
          console.log(result);
          res.status(200).json(req.body);
        }
      });
    });
  });
};

module.exports = {
  sendEmail,
};
