// const res = require("express/lib/response");
const User = require("./userModel");

// Add user --- NOTE!: req, res = Request - Response
exports.addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save(); //With .save we keep the value of "newUser"
    console.log(req.body.username);
    res.status(200).send({ message: "User added succesfully", newUser });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Adding" });
  }
};

// List!               v
exports.list = async (req, res) => {
  try {
    console.log(await User.find({}));
    res //ponse //200 = OK -- 500 = err
      .status(200)
      .send({ message: `Here we've our list! ==> ${await User.find({})}` });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error listing" });
  }
};

//Delete user
exports.deleteUser = async (req, res) => {
  try {
    // ".param" check for the existence of the data requested related to the route parameter(username).
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

// Update User (.body is a built-in, works similar to .param)
exports.updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.body._id, req.body);
    updateUser = await User.findById(req.body);
    res.status(200).send({ message: "User updated!", updateUser });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Error updating" });
  }
};

exports.getUser = async (req, res) => {
  try {
    res.status(200).send({ username: req.user.username });
  } catch (err) {
    console.log(err);
  }
};
