import express from "express";
import { startDatabase } from "./database";

import categoryRouter from "./routers/categories.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoryRouter);

export default app.listen(3000, () => {
  console.log("Server running");
  startDatabase();
});
