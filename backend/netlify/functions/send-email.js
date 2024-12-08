// const nodemailer = require('nodemailer');

// exports.handler = async (event, context) => {
//     if (event.httpMethod !== 'POST') {
//         return {
//             statusCode: 405,
//             body: 'Method Not Allowed',
//         };
//     }

//     try {
//         const { name, email, message } = JSON.parse(event.body);

//         // Configuración del transporte de nodemailer
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 user: process.env.EMAIL_USER,
//                 pass: process.env.EMAIL_PASS,
//             },
//             logger: true,   // Habilita el registro de logs
//             debug: true,    // Habilita el modo de depuración
//         });

//         // Opciones del correo
//         const mailOptions = {
//             from: 'hellospeakandhabla@gmail.com',
//             to: 'info@speakandhabla.com',
//             subject: `Mensaje de ${name}`,
//             text: `Has recibido un mensaje de ${name} (${email}):\n\n${message}`,
//         };

//         // Enviar el correo
//         await transporter.sendMail(mailOptions);
//         console.log('Correo enviado correctamente');
//         return {
//             statusCode: 200,
//             body: 'Correo enviado correctamente',
//         };
//     } catch (error) {
//         console.error('Error en el proceso:', error); // Captura cualquier error
//         return {
//             statusCode: 500,
//             body: 'Error al enviar el correo: ' + error.message,
//         };
//     }
// };

const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    // Definir los orígenes permitidos
    const allowedOrigins = ['https://speakandhabla.netlify.app'];
    const origin = event.headers.origin || '*';
    
    // Si el origen no está permitido, devolver error 403
    if (!allowedOrigins.includes(origin)) {
        return {
            statusCode: 403,
            body: 'Forbidden',
        };
    }

    // Establecer los encabezados CORS
    const headers = {
        'Access-Control-Allow-Origin': origin, // Permitir el origen del frontend
        'Access-Control-Allow-Methods': 'OPTIONS, POST', // Métodos permitidos
        'Access-Control-Allow-Headers': 'Content-Type', // Encabezados permitidos
    };

    // Si la solicitud es una pre-solicitud OPTIONS, responder con 200
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: '',
        };
    }

    // Verificar que el método sea POST
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
            headers,
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
            headers, // Incluir los encabezados CORS en la respuesta
        };
    } catch (error) {
        console.error('Error en el proceso:', error); // Captura cualquier error
        return {
            statusCode: 500,
            body: 'Error al enviar el correo: ' + error.message,
            headers, // Incluir los encabezados CORS en la respuesta
        };
    }
};
