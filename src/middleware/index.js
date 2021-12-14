const bc = require("bcrypt"); // May be bcrypt
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bc.hash(req.body.password, 8);
    next(); // [2]
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "There's an error, please, try again" });
  }
};
