const nodemailer = require("nodemailer");
const serverInfo = require('../config/mailerInfo.json');

class Mailer {

  constructor() {
    
    this.transporter = nodemailer.createTransport(
      {
        pool: true,
        maxConnections: 10,
        host: serverInfo.host,
        port: serverInfo.port,
        secure: serverInfo.secure,
        auth: {
          user: serverInfo.email,
          pass: serverInfo.password,
        }
      },
      {
        from: `${serverInfo.name} <${serverInfo.email}>`,
      }
    );
  }

  async sendMail(email, subject, message) {

    await this.transporter.verify();

    const info = await this.transporter.sendMail({
      to: email,
      subject: subject,
      text: message,
    });
  };
}

module.exports = new Mailer();