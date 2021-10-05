const express = require("express");
const db = require("./config/database");

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Backend APIS",
      description: "API'S Information in detail",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },
  // []
  apis: ["./routes/*.routes.js"],
};

try {
  const user = require("./routes/user.routes.js");
  const group = require("./routes/group.routes.js");
  const friend = require("./routes/friend.routes.js");
  const expense = require("./routes/expense.routes.js");

  const app = express();

  app.use("/api/user", user);
  app.use("/api/group", group);
  app.use("/api/friend", friend);
  app.use("/api/expense", expense);

  const swaggerDocs = swaggerJSDoc(swaggerOptions);
  app.use("/bookkeeping", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

  db.authenticate()
    .then(() => console.log("Database connected"))
    .catch((err) => console.log("error", err));
  // Or you can simply use a connection uri

  app.get("/", (req, res) => res.send("index"));
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, console.log("listening on 5000"));
} catch (error) {
  console.log(error);
}
