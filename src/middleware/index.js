const bcrypt = require("bcrypt"); //bcryptJS is more secure
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    // ^v^v^v^v^v^v^v^ \\
    const pass = await User.findOne({ username: req.body.username });
    req.body.password = await bcrypt.compare(req.body.password, pass);
    next(); // [2]
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "There's an error, please, try again" });
  }
};

// 1st parameter is the data to compare and the 2nd is the data to be compared
// exports.checkPassword = async (req, res, password) => {
//   try {
//     const match = await bcrypt.compare(req.body.password, req.User.password);
//     if (match) {
//       console.log("Password matched!");
//     } else {
//       console.log("Error, try again!");
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).send({ message: "Error, try again" });
//   }
// };

// req.body.password = await bcrypt.compare(
//   req.body.password,
//   req.User.password
// );
