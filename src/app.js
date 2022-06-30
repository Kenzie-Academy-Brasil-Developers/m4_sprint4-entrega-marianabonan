import express from "express";
import { startDatabase } from "./database";

import routerCategory from "./routers/categories.routes";
import routerProducts from "./routers/products.routes";

const app = express();

app.use(express.json());
app.use("/categories", routerCategory);
app.use("/products", routerProducts);

export default app.listen(4000, () => {
  console.log("Server running");
  startDatabase();
});
