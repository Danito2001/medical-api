const nodemailer = require('nodemailer');

const sendEmail = async (to, subject, text) => {
    try {
        
        console.log('Creando transporter');

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS 
            }
        });

        const mailOptions = {
            from: 'tu-email@gmail.com',
            to: to,   
            subject: subject,
            text: text
        };  

        console.log('Antes de verify');

        await transporter.verify();

        console.log('SMTP conectado correctamente');

        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado: ' + info.response);
        
    } catch (error) {
        console.error('Error al enviar correo:', error);
        throw new Error('No se pudo enviar el correo');
    }
};

module.exports = { sendEmail };
