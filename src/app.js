import express from "express";
import "dotenv/config";
import { startDatabase } from "./database";

import categoryRouter from "./routers/categories.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoryRouter);

export default app.listen(3333, () => {
  console.log("Server running");
  startDatabase();
});
