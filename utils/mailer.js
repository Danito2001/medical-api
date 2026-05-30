const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject, text) => {
    try {
        
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to,
            subject,
            text
        });

        console.log('Correo enviado:', data);
        return data;
        
    } catch (error) {
        console.error('Error al enviar correo:', error);
        throw new Error('No se pudo enviar el correo');
    }
};

module.exports = { sendEmail };
