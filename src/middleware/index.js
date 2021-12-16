const bcrypt = require("bcryptjs"); //bcryptJS is more secure
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    next(); // [2]
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error hash pass" });
  }
};

// 1st parameter is the data to compare and the 2nd is the data to be compared
exports.checkPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (await bcrypt.compare(req.body.password, user.password)) {
      req.user = user; // If req.user === user then is matched
      next();
      console.log("Password matched!");
    } else {
      console.log("Error, decrypt!");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error, try again" });
  }
};

// req.body.password = await bcrypt.compare(
//   req.body.password,
//   req.User.password
// );
