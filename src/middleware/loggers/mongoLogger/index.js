const mongoose = require("mongoose");
const config = require('../../../config/mongoLogger.json');
const schemas = require('./schemas');

const createLog = async (ctx, error = null) => {

  // спросить, как работать с полученным соединением?

  const connection = await mongoose.connect(config.dev.url, config.dev.options);

  try {

    const Log = connection.model("Log", schemas.logSchema);
    const ErrorLog = connection.model("Log", schemas.errorLogSchema);

    const body = {
      url: ctx.originalUrl,
      query: ctx.querystring,
      method: ctx.method,
      date: new Date(),
    };

    let log;

    if (error) {

      body.status = "failed";
      body.error = {
        name: error.name,
        message: error.message,
      };

      log = new ErrorLog(body);
    }
    else {

      body.status = "success";

      log = new Log(body);
    }
    
    console.log(await log.save());    
  }
  finally {
    await connection.disconnect();
  }
}

module.exports.createLog = createLog;

module.exports = async (ctx, next) => {

  try {

    await next();
    await createLog(ctx);

  } catch (error) {

    await createLog(ctx, error);
    throw error;
  }
}