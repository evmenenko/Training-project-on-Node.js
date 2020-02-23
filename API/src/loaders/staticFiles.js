const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');
const SRC_DIR = require('../settings').SRC_DIR;

module.exports = app => {

    const static_pages = new Koa();
    static_pages.use(serve(SRC_DIR + '\\uploads'));
    
    app.use(mount('/uploads', static_pages));
}

  