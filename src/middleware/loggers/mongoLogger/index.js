const mongoose = require("mongoose");
const config = require('../../../config/mongoLogger.json');
const schema = require('./schema');

const createLog = async (ctx, error = null) => {

  // спросить, как работать с полученным соединением?

  const connection = await mongoose.connect(config.dev.url, config.dev.options);

  try {

    const body = {
      url: ctx.originalUrl,
      method: ctx.method,
      body: ctx.body,
      date: new Date(),
    };

    let Log = connection.model("Log", schema);

    if (error) {
      body.status = "failed";
      body.data = {
        name: error.name,
        message: error.message,
      };
    }
    else {
      body.status = "success";
      body.data = {};
    }

    let log = new Log(body);
    await log.save();

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