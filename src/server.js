const express = require("express");

const app = express();
const app2 = express();
const app3 = express();

// Create a variable with the port (as we're using many ports, we don't need to create the variable)
// const port = 5000;
// const port1 = 5001;

app.use("/", express.static("public"));
app.use("/page2", express.static("public/page2.html"));

app.listen(5000, () => {
  console.log("Listening on port :5000");
});

// app2.use("/homepage", express.static("public"));
// app2.use("/", express.static("public", { index: "page2.html" }));

// app2.listen(5001, () => {
//   console.log("Listening on port :5001");
// });
