const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');
const API_DIR = require('../settings').API_DIR;

module.exports = app => {

    const static_pages = new Koa();
    static_pages.use(serve(API_DIR + '\\uploads'));
    
    app.use(mount('/uploads', static_pages));
}

  