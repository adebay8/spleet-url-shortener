import "reflect-metadata";
import express from "express";
import cors from "cors";
import { db } from "./database/connect";
import addressRoutes from "./api/address.route";

const port = process.env.PORT || 1337;

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (_, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to the spleet url shortener",
  });
});

app.listen(port, async () => {
  console.log("App is running on port 3000");
  const connection = await db.connectToDB();
  addressRoutes(app, connection);
});
