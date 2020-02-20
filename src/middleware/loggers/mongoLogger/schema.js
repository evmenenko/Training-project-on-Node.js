const Schema = require("mongoose").Schema;

module.exports = new Schema(
  {
    url: String,
    body: Object,
    method: String,
    status: String,
    date: Date,
    data: Object,
  }, 
  {
    versionKey: false,
  },
);