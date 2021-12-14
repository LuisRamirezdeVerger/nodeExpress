// const res = require("express/lib/response");
const User = require("./userModel");

// Add user --- NOTE!: req, res = Request - Response
exports.addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send({ message: "User addes succesfully", newUser });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error, please try again" });
  }
};

// Keep working here!
