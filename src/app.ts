import "reflect-metadata";
import express from "express";
import { db } from "./database/connect";
import addressRoutes from "./api/address.route";

const port = process.env.PORT || 1337;

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.listen(port, async () => {
  console.log("App is running on port 3000");
  const connection = await db.connectToDB();
  addressRoutes(app, connection);
});
