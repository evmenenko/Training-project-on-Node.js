const sendmail = require('sendmail')();
const serverInfo = require('../config/serverInfo.json');

class Mailer {

  sendMail(email, subject, message) {
    sendmail(
      {
        from: serverInfo.email,
        to: email,
        subject: subject,
        html: message,
      },
      function(err, reply) {
        console.log(err && err.stack);
        console.dir(reply);
      }
    );
  };
}

module.exports = new Mailer();