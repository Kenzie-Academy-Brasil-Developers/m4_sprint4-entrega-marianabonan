import listProductService from "../../services/products/listProducts.service";

export default async function listProductsController(request, response) {
  try {
    const ProductsList = await listProductService();

    return response.status(200).json(ProductsList);
  } catch (error) {
    return response.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
}
