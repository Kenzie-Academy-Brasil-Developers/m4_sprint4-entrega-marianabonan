import deleteProductService from "../../services/products/deleteProduct.service";

export default async function deleteProductController(request, response) {
  try {
    const { id } = request.params;
    const product = await deleteProductService({ id });

    return response.status(204).json({ message: "Product deleted!", product });
  } catch (error) {
    return response.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
}
