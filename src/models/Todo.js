const mongoose = require('mongoose'); //import mongoose

// todo schema
const TodoSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

const Todo = mongoose.model('Todo', TodoSchema); //convert to model named TODO
module.exports = Todo; //export for controller use
