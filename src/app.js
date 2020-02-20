const Koa = require('koa');
const databaseConnect = require('./sequelize').connect;
const initApp = require('./loaders');
const port = require('./config/serverInfo.json').port || parseInt('3000', 10);

(async () => {

  try {

    await databaseConnect();
  
    const app = new Koa();
    await initApp(app);
  
    app.listen(port);
  
    console.log(`Server started and listening on port: ${port}`);
    
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