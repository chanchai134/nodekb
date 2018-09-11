let mongoose = require('mongoose');

// Article Schema
let articleSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true
  },
  r1:{
    type: Number,
    required: true
  },
  r2:{
    type: Number,
    required: true
  },
  r3:{
    type: Number,
    required: true
  }
});

let Article = module.exports = mongoose.model('Article', articleSchema);
