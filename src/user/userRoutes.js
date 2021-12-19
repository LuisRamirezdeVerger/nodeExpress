const { Router } = require("express");
const {
  addUser,
  list,
  updateUser,
  deleteUser,
  getUser,
} = require("./userController");
const { hashPassword, checkPassword } = require("../middleware");
const userRouter = Router();

// CRUD Operations
userRouter.post("/user", hashPassword, addUser);
userRouter.get("/user", list);
userRouter.put("/get", checkPassword, getUser);
userRouter.put("/user", checkPassword, updateUser);
userRouter.delete("/user", deleteUser);

//So we can use our endpoint in all of our files
/*        vvvvvvvv         */
module.exports = userRouter;

// await User.findByIdAndUpdate(req.body._id, req.body);
//     const user = await User.findById(req.body._id);
//     res.status(200).send({ message: "Successfully updated user", user });
