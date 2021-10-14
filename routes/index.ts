import express from "express";

const app = express();

import user from "./api/user.routes";

import group from "./api/group.routes";

import friend from "./api/friend.routes";

import expense from "./api/expense.routes";

app.use("/api/user", user);
app.use("/api/group", group);
app.use("/api/friend", friend);
app.use("/api/expense", expense);

export default app;
