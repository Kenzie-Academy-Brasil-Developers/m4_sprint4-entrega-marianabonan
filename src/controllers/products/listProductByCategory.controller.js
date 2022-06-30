import listProdutsByCategoryService from "../../services/products/listProdutsByCategory.service";

export default async function listProductsByCategoryController(
  request,
  response
) {
  const { category_id } = request.params;
  try {
    const ProductsList = await listProdutsByCategoryService({ category_id });

    return response.status(200).json(ProductsList);
  } catch (error) {
    return response.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
}
