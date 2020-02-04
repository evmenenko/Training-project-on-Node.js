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
  
  } catch (error) {
  
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
    
    process.exit(1);
  }
})();

/*

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - $ms`)
})

routes(router)

app.on('error', function(err, ctx) {
  console.log(err)
  logger.error('server error', err, ctx)
})

*/
