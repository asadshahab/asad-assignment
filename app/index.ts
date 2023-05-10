import express, { Request, Response } from "express";
import { config } from "dotenv";
import connectDB from "./config/database";
import router from "./api/routes";
config();

const app = express();

// middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

connectDB();

const Port = process.env.PORT || 5000;
app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
