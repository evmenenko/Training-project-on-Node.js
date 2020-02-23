const bodyparser = require('koa-bodyparser');
const cookieParser = require('koa-cookie-parser');
const json = require('koa-json');

module.exports = (app) => {

  app
    .use(cookieParser({
      cookieNameList: [ 'userId', 'uuId' ],
      cipherKey: "hello world",
      maxAge: 60 * 60 * 24,
    }))
    .use(json())
    .use(bodyparser());
}