const mongoose = require("mongoose");

const Todo = mongoose.model("Todo", {
  title: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: String,
    required: true,
    trim: true,
  },
  Venue: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = Todo;
