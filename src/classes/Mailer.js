const nodemailer = require("nodemailer");
const serverInfo = require('../config/serverInfo.json');

class Mailer {

  async sendMail(email, subject, message) {

    let transporter = nodemailer.createTransport({
      host: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: serverInfo.email,
        pass: serverInfo.passwprd,
      }
    });

    await transporter.sendMail({
      from: serverInfo.email,
      to: email,
      subject: subject,
      text: message,
    });

    transporter.close();
  };
}

module.exports = new Mailer();