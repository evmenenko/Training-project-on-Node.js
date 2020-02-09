const MongoClient = require('mongodb').MongoClient;
const config = require('../../config/mongoLogger.json');

const createLog = (error = null) => {

  let log = {
    url: ctx.originalUrl,
    query: ctx.querystring,
    method: ctx.method,
  };

  // возможны ли с mongo подобия sql инъекций?

  MongoClient.connect(config.dev.url, config.dev.options, (err, client) => {
    
    if (err) {
      client.close();
      throw err;
    }

    const db = client.db(config.dev.database);
    const collection = db.collection(config.dev.collections.logs);

    if (error) {
      log.error = {
        name: error.name,
        message: error.message,
      }
      log.status = "failed";
    }
    else {
      log.status = "success";
    }
    log.date = new Date();

    collection.insertOne(log, function(err, result){
      client.close();
      if (err) throw err; // уточнить, что делать с такими ошибками:
                          // - из-за колбека может не попасть в обработчик ошибок
    });
  });
}

module.exports.createLog = createLog;

module.exports = (ctx, next) => {

  try {

    await next();
    createLog();

  } catch (error) {

    createLog(error);
    throw error;
  }
}