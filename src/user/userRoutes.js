const { Router } = require("express");
const { addUser, list, updateUser, deleteUser } = require("./userController");
const { hashPassword } = require("../middleware");
const userRouter = Router();

// CRUD Operations
userRouter.post("/user", hashPassword, addUser);
userRouter.get("/user", list);
userRouter.put("/user", updateUser);
userRouter.delete("/user", deleteUser);

//So we can user our endpoint in all of our files
module.exports = userRouter;

// await User.findByIdAndUpdate(req.body._id, req.body);
//     const user = await User.findById(req.body._id);
//     res.status(200).send({ message: "Successfully updated user", user });
