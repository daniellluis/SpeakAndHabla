const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
    if (req.method === 'POST') {
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

        const mailOptions = {
            from: 'hellospeakandhabla@gmail.com',
            to: 'info@speakandhabla.com',
            subject: `Mensaje de ${name}`,
            text: `Has recibido un mensaje de ${name} (${email}):\n\n${message}`,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ error: 'Error al enviar el correo' });
        }
    } else {
        res.status(405).json({ error: 'Método no permitido' });
    }
};