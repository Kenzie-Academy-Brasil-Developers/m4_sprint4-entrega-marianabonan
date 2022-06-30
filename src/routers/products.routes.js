import { Router } from "express";

import createProductController from "../controllers/products/createProduct.controller";
import deleteProductController from "../controllers/products/deleteProduct.controller";
import listProductsByCategoryController from "../controllers/products/listProductByCategory.controller";
import listProductsController from "../controllers/products/listProduct.controllers";
import updateProductController from "../controllers/products/updateProduct.controller";
import listOneProductController from "../controllers/products/listOneProduct.controller";

const routerProducts = Router();

routerProducts.post("", createProductController);

routerProducts.delete("/:id", deleteProductController);

routerProducts.patch("/:id", updateProductController);

routerProducts.get("", listProductsController);
routerProducts.get("/:id", listOneProductController);
routerProducts.get("/category/:category_id", listProductsByCategoryController);

export default routerProducts;
