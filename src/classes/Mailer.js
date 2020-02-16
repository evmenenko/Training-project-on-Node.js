const nodemailer = require('nodemailer');
const emailOptions = require('../config/serverInfo.json').email;
const createLog = require('../middleware/loggers/mongoLogger').createLog;

// как обрабатывать ошибки, если, например, что-то произойдет с почтой?

class Mailer {

  sendMail(email, subject, message) {

    const mailTransport = nodemailer.createTransport(emailOptions);
  
    mailTransport
      .sendMail(
        {
          from: 'Online cinema',
          to: email,
          subject: subject,
          text: message,
        },
        function(err, info) {
          console.log("* error from mailer *");
          console.log(err.name);
          console.log(err.message);
          console.log(info);
          createLog(err);
        }
      );
  };
}

module.exports = new Mailer();