import express from "express";

import db from "./config/database";

import indexRoutes from "./routes";

import dotenv from "dotenv";

dotenv.config();

import swaggerJSDoc from "swagger-jsdoc";

import swaggerUI from "swagger-ui-express";

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Backend APIS",
      description: "API'S Information in detail",
      version: "1.0.0",
      contact: {
        name: "Developer",
      },
      servers: ["http://localhost:5000"],
    },
  },
  apis: ["./routes/api/*.routes.ts"],
};

const app = express();
app.use(indexRoutes);

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/bookkeeping", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

async function dbconnection() {
  try {
    let result = await db.authenticate();
    console.log(" Database connected successfully");
  } catch (error) {
    console.log(error);
  }
}
dbconnection();

app.get("/", (req, res) => res.send("index"));

try {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT);
  console.log(`listening on ${PORT}`);
} catch (error) {
  console.log(error);
}
