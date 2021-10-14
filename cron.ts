// const nodeCron = require("node-cron");
// const job = nodeCron.schedule("*/10 * * * * *", () => {
//   console.log(new Date().toLocaleString());
// });

import * as nodeCron from "node-cron";

const job = nodeCron.schedule("*/10 * * * * *", () => {
  console.log(new Date().toLocaleString());
});
