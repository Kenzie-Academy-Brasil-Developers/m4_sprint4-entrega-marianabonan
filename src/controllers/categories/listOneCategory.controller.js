import listOneCategoryService from "../../services/categories/listOneCategory.service";

export default async function listOneCategoryController(request, response) {
  try {
    const { id } = request.params;
    const category = await listOneCategoryService(id);
    return response.status(200).json(category);
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
}
