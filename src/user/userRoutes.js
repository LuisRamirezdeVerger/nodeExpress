const { Router } = require("express");
const { addUser } = require("./userController");
const { hashPassword } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.put("/user", list);
userRouter.patch("/user", updateUser);
userRouter.delete("/user", deleteUser);

//So we can user our endpoint in all of our files
module.exports = userRouter;
