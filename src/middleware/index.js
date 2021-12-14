const bc = require("bcryptjs");
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next();
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "There's an error, please, try again" });
  }
};
