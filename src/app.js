const Koa = require('koa');
const databaseConnect = require('./sequelize').connect;
const initApp = require('./loaders');
const port = require('./config/serverInfo.json').port || parseInt('3000', 10);
const serve = require('koa-static');
const mount = require('koa-mount');

(async () => {

  try {

    await databaseConnect();
  
    const app = new Koa();

    // временно доступ к uploads будет тут

    const static_pages = new Koa();
    static_pages.use(serve('src/uploads'));
    app.use(mount('/uploads', static_pages));

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