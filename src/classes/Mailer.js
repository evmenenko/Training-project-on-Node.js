const nodemailer = require('nodemailer');
const serverInfo = require('../config/serverInfo.json');
const createLog = require('../middleware/loggers/mongoLogger').createLog;

// как обрабатывать ошибки, если, например, что-то произойдет с почтой?
// и нужно ли использовать этот модуль? есть алтернативы, например, sendmail
// но он не так популярен. почему??

class Mailer {

  constructor() {
    this.mailTransport = nodemailer.createTransport(serverInfo.email);
  }

  async sendMail(email, subject, message) {
    return await this.mailTransport
      .sendMail(
        {
          from: serverInfo.name,
          to: email,
          subject: subject,
          text: message,
        }
      );
  };
}

module.exports = new Mailer();