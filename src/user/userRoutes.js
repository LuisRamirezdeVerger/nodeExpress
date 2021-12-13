const { Router } = require("express");
const { addUser } = require("./userController");
const userRouter = Router();

userRouter.post("/user", addUser);

//So we can user our endpoint in all of our files
module.exports = userRouter;
