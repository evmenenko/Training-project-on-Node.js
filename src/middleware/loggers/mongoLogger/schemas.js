const Schema = require("mongoose").Schema;

const logSchema = new Schema(
  {
    url: String,
    query: String,
    method: String,
    status: String,
    date: Date,
  }, 
  {
    versionKey: false,
  },
);

const errorLogSchema = new Schema(
  {
    url: String,
    query: String,
    method: String,
    status: String,
    date: Date,
    error: {
      name: String,
      message: String,
    },
  }, 
  {
    versionKey: false,
  },
);

module.exports = {
  logSchema,
  errorLogSchema,
}