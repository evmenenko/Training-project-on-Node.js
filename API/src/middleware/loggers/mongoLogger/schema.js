const Schema = require("mongoose").Schema;

const logSchema = new Schema(
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

const errorSchema = new Schema(
  {
    url: String,
    body: Object,
    method: String,
    status: String,
    date: Date,
    error: Object,
  }, 
  {
    versionKey: false,
  },
);

module.exports = {
  logSchema,
  errorSchema,
}