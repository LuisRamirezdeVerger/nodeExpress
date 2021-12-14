// const res = require("express/lib/response");
const User = require("./userModel");

// Add user --- NOTE!: req, res = Request - Response
exports.addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    console.log(req.body.username);
    res.status(200).send({ message: "User added succesfully", newUser });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error, please try again" });
  }
};

// List!
exports.list = async (req, res) => {
  try {
    console.log(await User.find({}));
    res
      .status(200)
      .send({ message: `Here we've our list! ==> ${await User.find({})}` });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error, try again" });
  }
};

//Delete user
exports.deleteUser = async (req, res) => {
  try {
    let username = await req.params.username;
    User.deleteOne(
      {
        _username: username,
      },
      function (err) {
        if (err) {
          res.send(err);
        } else {
          res.send("Successfully! User has been Deleted.");
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.body._id, req.body);
    updateUser = await User.findById(req.body);
  } catch (err) {
    console.log(err);
  }
};
