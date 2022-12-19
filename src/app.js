import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./routers/userRouter.js";
import urlRouter from "./routers/urlRouter.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(urlRouter);

app.listen(process.env.PORT || 4000, () =>
  console.log(`Servidor ouvindo em localhost:${process.env.PORT || 4000}`)
);
