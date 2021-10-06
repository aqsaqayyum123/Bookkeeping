const app = require("express").Router();

const user = require("./api/user.routes.js");
const group = require("./api/group.routes.js");
const friend = require("./api/friend.routes.js");
const expense = require("./api/expense.routes.js");

app.use("/api/user", user);
app.use("/api/group", group);
app.use("/api/friend", friend);
app.use("/api/expense", expense);

module.exports = app;
