const mongoose = require("mongoose");

//Creating the Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/, // Format how email should be entered
    // https://www.keycdn.com/support/regex-cheatsheet (regex docs)
  },
  password: {
    type: String,
    required: true,
  },
});

//Creating the model
const User = mongoose.model("User", userSchema);

module.exports = User;
