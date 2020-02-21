const fs = require("fs");

// стоит ли реализовать менеджер как отдельный модуль с контроллером и сервисом?

class FileManager {
  
  deleteFile(path) {

    fs.unlinkSync(path);
  }
}

module.exports = new FileManager();