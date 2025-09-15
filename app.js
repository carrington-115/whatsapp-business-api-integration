import dotenv from "dotenv";
import express from "express";
import receiptRouter from "./src/routes/receipt.routes.js";

dotenv.config();
const app = express();
app.use(express.json()); // accept json files

app.use("/", receiptRouter);

app.listen(process.env.NODE_ENV === "development" ? process.env.PORT : 3000);
