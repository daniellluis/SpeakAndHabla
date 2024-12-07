require('dotenv').config({ path: '.env.local' });
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Si decides enviar el formulario como JSON

// Ruta para manejar el envío del formulario
app.post('/send-email',async (req, res) => {
    try {
    console.log('Cuerpo de la solicitud:', req.body);
    const { name, email, message } = req.body;

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
    res.status(200).send('Correo enviado correctamente');
} catch (error) {
    console.error('Error en el proceso:', error); // Captura cualquier error
    res.status(500).send('Error al enviar el correo: ' + error.message);
}
});

// Configuración del puerto del servidor Express
const PORT = 5000; 
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
