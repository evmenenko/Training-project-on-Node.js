const nodemailer = require('nodemailer');
const serverInfo = require('../config/serverInfo.json');

// НЕ ЗАБУДЬ СПРОСИТЬ, НОРМАЛЬНО ЛИ ВСЕ СДЕЛАЛ (USERNAME и т.д.)!!!!

// Как обрабатывать ошибки, если, например, что-то произойдет с почтой?
// И нужно ли использовать этот модуль? Есть алтернативы, например, sendmail.
// Он намного проще, но не так популярен. Почему?

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