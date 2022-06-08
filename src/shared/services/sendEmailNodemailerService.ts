import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: `${process.env.EMAIL_HOST}`,
    port: parseInt(`${process.env.EMAIL_PORT}`),
    auth: {
        user: `${process.env.EMAIL_SENDER}`,
        pass: 'AqabgTNKXY5H3fvmfW'
    }
});



export const sendEmail = (recipient: string, subject: string, link?: string) => {
    let message = {
        from: `Sender Name <${process.env.EMAIL_SENDER}>`,
        to: `Recipient <${recipient}>`,
        subject: `${subject}`,
        text: 'Hello to myself!',
        html: `<p><b>Hello</b> to myself!</p> ${link ? '<a>'+link+'</a>' : ''}`,
    };

    transporter.sendMail(message, (err, info) => {
        if (err) {
            console.log('Error occurred. ' + err.message);
            return process.exit(1);
        }
    
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
}