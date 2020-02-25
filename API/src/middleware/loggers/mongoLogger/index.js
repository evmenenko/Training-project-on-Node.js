const mongoose = require("mongoose");
const config = require('../../../config/mongoLogger.json');
const schemas = require('./schema');
const env = require('../../../settings').env;

const createInfo = async (infoObject) => {

  const connection = await mongoose.connect(config[env].url, config[env].options);

  try {

    const body = {
      data: infoObject,
      date: new Date(),
    };

    let Info = connection.model("Information", schemas.informationSchema);

    let info = new Info(body);
	  await info.save();

  }
  finally {
    await connection.disconnect();
  }
}

const createLog = async (ctx, error = null) => {

  const connection = await mongoose.connect(config[env].url, config[env].options);

  try {

    const body = {
      url: ctx.originalUrl,
      method: ctx.method,
      body: ctx.request.body,
      date: new Date(),
    };

    let Log = error ? connection.model("Error", schemas.errorSchema) : connection.model("Log", schemas.logSchema);

    if (error) {
      body.status = "failed";
      body.error = {
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

module.exports = async (ctx, next) => {

  try {

    await next();
    await createLog(ctx);

  } catch (error) {
    await createLog(ctx, error);
    throw error;
  }
}

module.exports.createInfo = createInfo;
module.exports.createLog = createLog;