import express from "express";
import { router } from "./routes/router";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3001, () => console.log("Server is Running on port 3001"));