// /backend/api/sendEmail.js

require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { name, email, message } = req.body;
      console.log('Cuerpo de la solicitud:', req.body);

      // Configuración del transporte de Nodemailer
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        logger: true,   // Habilita el registro de logs
        debug: true,    // Habilita el modo de depuración
      });

      // Opciones del correo
      const mailOptions = {
        from: 'hellospeakandhabla@gmail.com',
        to: 'info@speakandhabla.com',
        subject: `Mensaje de ${name}`,
        text: `Has recibido un mensaje de ${name} (${email}):\n\n${message}`,
      };

      // Enviar el correo
      await transporter.sendMail(mailOptions);
      console.log('Correo enviado correctamente');
      res.status(200).send('Correo enviado correctamente');
    } catch (error) {
      console.error('Error en el proceso:', error);
      res.status(500).send('Error al enviar el correo: ' + error.message);
    }
  } else {
    res.status(405).send('Método no permitido');
  }
};
