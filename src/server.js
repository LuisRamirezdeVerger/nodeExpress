require("./db/connection");
// -- Import express framework
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/userRoutes");

// -- Create the express app(s)
const app = express();
// const app2 = express();

// -- Create a variable with the port (if we were using many ports, we'd not need to create the variable)
const port = 5000;
// const port1 = 5001;

app.use(express.json());
app.use(cors());
app.use(userRouter);
// app.use("/page2", express.static("public/page2.html"));

app.listen(port, () => {
  console.log("Listening on port :5000");
});

// app2.use("/homepage", express.static("public"));
// app2.use("/", express.static("public", { index: "page2.html" }));

// app2.listen(5001, () => {
//   console.log("Listening on port :5001");
// });
