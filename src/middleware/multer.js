const multer = require('koa-multer');

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './src/uploads/');
  },
  filename(req, file, cb) {

    // стоит ли оставлять таким название файла или же по-другому сохранают названия?
    // например, просто пропускают через hash-функцию originalname
    cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname);
  },
})

const upload = multer({ storage });

module.exports = {
  upload,
}