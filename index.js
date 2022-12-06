const express = require("express");

const server = express();

const handleAllTypesOfRequests = (req, res) => {
  res.send("Response from server.use");
};

server.use("/profile", handleAllTypesOfRequests);
server.post("/login", (req, res) => res.send("This is the login page"));
server.post("/addUser", (req, res) => res.send("This is the Add User Route"));
server.patch("/updateUser", (req, res) =>
  res.send("This is the Update User Route")
);
server.delete("/deleteUser", (req, res) =>
  res.send("This is the Delete User Route")
);

server.listen(3000, () => {
  console.log("server is listening on port 3000");
});
