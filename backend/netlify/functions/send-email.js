require('dotenv').config({ path: '.env.local' });
const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    try {
        const { name, email, message } = JSON.parse(event.body);

        // Configuración del transporte de nodemailer
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
        return {
            statusCode: 200,
            body: 'Correo enviado correctamente',
        };
    } catch (error) {
        console.error('Error en el proceso:', error); // Captura cualquier error
        return {
            statusCode: 500,
            body: 'Error al enviar el correo: ' + error.message,
        };
    }
};