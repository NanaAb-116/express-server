const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("This is the home route"));
app.post("/login", (req, res) => res.send("This is the login route"));
app.patch("/about", (req, res) => res.send("This is the about Route"));
app.delete("/deleteUser", (req, res) =>
  res.send("This is the Delete User Route")
);

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
