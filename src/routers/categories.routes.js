import { Router } from "express";
import { createCategoryController } from "../controllers/categories/createCategory.Controller";
import deleteCategoryController from "../controllers/categories/deleteCategory.controller";
import { listCategoryController } from "../controllers/categories/listCategory.controller";
import listOneCategoryController from "../controllers/categories/listOneCategory.controller";
import updateCategoryController from "../controllers/categories/updateCatery.controller";

const categoryRouter = Router();

categoryRouter.post("/", createCategoryController);

categoryRouter.get("", listCategoryController);
categoryRouter.get("/:id", listOneCategoryController);

categoryRouter.patch("/:id", updateCategoryController);

categoryRouter.delete("/:id", deleteCategoryController);

export default categoryRouter;
