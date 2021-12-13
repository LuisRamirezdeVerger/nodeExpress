const { Router } = require("express");
const { addUser } = require("./userController");
const userRouter = Router();

userRouter.post("/user", addUser);
userRouter.put("/user", list);
userRouter.patch("/user", updateUser);
userRouter.delete("/user", deleteUser);

//So we can user our endpoint in all of our files
module.exports = userRouter;
