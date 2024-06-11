import express from "express";
import { httpLogger, HandleErrorWithLogger } from "./utils";
import catalogRouter from "./api/catalog.apis";


const app = express();
app.use(express.json());
app.use(httpLogger);

app.use("/", catalogRouter);

app.use(HandleErrorWithLogger);

export default app;
