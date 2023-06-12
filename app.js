var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const authenticationMiddleware = require("./authenticationMiddleware");
const permissionsMiddleware = require("./permissionsMiddleware");

var teste1 = require("./teste1");
const addUser = require("./teste2");
const deleteUser = require("./teste3");
const updateUser = require("./teste4");
const getUserAccessCount = require("./teste5");

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", addUser);
app.delete(
  "/users",
  authenticationMiddleware,
  permissionsMiddleware,
  deleteUser
);
app.put("/users", authenticationMiddleware, permissionsMiddleware, updateUser);
app.get("/users/access", getUserAccessCount);

const port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
