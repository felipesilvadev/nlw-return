import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "36789c9eaee387",
    pass: "98286fff83994a"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendEmail({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Felipe Silva <felipe.silva@assesi.com>',
      subject,
      html: body,
    });
  }
}