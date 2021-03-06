export type SendMailData = {
  subject: string;
  body: string;
};

export interface MailAdapter {
  sendEmail: (data: SendMailData) => Promise<void>;
}