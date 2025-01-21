import connectDB from "@config/mongoDB";
import { apiRouter } from "@routes/api";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import "module-alias/register";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

connectDB();

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" }));
app.use("/api", apiRouter);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
