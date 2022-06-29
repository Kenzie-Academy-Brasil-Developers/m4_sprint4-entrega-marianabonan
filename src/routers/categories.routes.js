import { Router } from "express";
import { createCategoryController } from "../controllers/categories/createCategory.Controller";

const categoryRouter = Router();

categoryRouter.post("/", createCategoryController);

export default categoryRouter;
