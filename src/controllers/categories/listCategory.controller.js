import { listCategoryService } from "../../services/categories/listCategory.service";

export async function listCategoryController(request, response) {
  try {
    const list = await listCategoryService();
    return response.status(200).json(list);
  } catch (error) {
    return response.status(400).json(error);
  }
}
