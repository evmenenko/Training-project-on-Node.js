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

const httpSchema = new Schema(
  {
    url: String,
    method: String,
    date: Date,
    data: Object,
  }, 
  {
    versionKey: false,
  },
);

const databaseSchema = new Schema(
  {
    date: Date,
    data: Object,
  }, 
  {
    versionKey: false,
  },
);

const statusSchema = new Schema(
  {
    status: String,
    date: Date,
    data: Object,
  }, 
  {
    versionKey: false,
  },
);

// module.exports = {
//   httpSchema,
// }