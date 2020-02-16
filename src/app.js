const Koa = require('koa');
const databaseConnect = require('./sequelize').connect;
const initApp = require('./loaders');
const config = require('./config');

(async () => {

  try {

    await databaseConnect();
  
    const app = new Koa();
    initApp(app);
  
    const port = parseInt(config.port || '3000', 10);
    app.listen(port);
  
    console.log('Server started.');
    
    module.exports = app;
  }
  catch (error) {
  
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    try {
      await require('./middleware/loggers/mongoLogger').createLog(ctx, error);
    } 
    catch (ignoredError) { /* Ignore */ }
    
    process.exit(1);
  }
})();
