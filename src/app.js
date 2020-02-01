const Koa = require('koa');
const databaseConnect = require('./classes/sequelize').connect;
const initApp = require('./loaders');
const config = require('./config');

try {

  databaseConnect();

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

/*

const Koa = require('koa')
const Router = require('koa-router');
const app = new Koa()
const router = new Router()

const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const config = require('./config')
const routes = require('./routes')

const port = process.env.PORT || config.port

// error handler
onerror(app)

// middlewares
app.use(bodyparser())
app.use(json())
app.use(logger())
app.use(router.routes())
app.use(router.allowedMethods())

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

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})

module.exports = app

*/
