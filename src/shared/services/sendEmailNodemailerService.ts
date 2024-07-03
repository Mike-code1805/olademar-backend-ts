import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { ApplicationError } from '../../customErrors/ApplicationError';
dotenv.config();

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_PASSWORD,
  },
});

export const sendEmailServiceNodeMailer = async (
  recipient: string,
  subject: string,
  message?: string
) => {

  let msg = {
    from: `OlaDeMar.Dev <${process.env.SENDER_EMAIL}>`,
    to: `${recipient}`,
    subject: `${subject}`,
    text: 'Hello to myself!',
    html: message,
  };
  try {
    return await transporter.sendMail(msg);
  } catch (error: any) {
    return new ApplicationError(401, `${error.message}`);
  }
};