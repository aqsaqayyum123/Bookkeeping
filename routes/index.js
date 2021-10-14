const app = require("express").Router();

const user = require("./api/user.routes");
const group = require("./api/group.routes");
const friend = require("./api/friend.routes");
const expense = require("./api/expense.routes");
const cronjob = require("./api/cron.routes");

app.use("/api/user", user);
app.use("/api/group", group);
app.use("/api/friend", friend);
app.use("/api/expense", expense);
app.use("/api/cronjob", cronjob);

module.exports = app;
