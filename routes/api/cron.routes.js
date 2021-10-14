const app = require("express").Router();
const cron = require("node-cron");
var task = "";

app.get("/schedule", (req, res, next) => {
  task = cron.schedule(
    "*/10 * * * * *",
    () => {
      console.log("Cron task scheduled");
    },
    {
      scheduled: true,
    }
  );
  return res.send({
    message: "cron Job Scheduled Successfully",
  });
});

module.exports = app;
