const mongoose = require('mongoose'), Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

const authorSchema = Schema({
  name: String,
  stories: [{
    author: string,
    stories: ObjectId
  }]
});

