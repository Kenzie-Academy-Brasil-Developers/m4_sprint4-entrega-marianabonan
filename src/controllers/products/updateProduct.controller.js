import updateProductService from "../../services/products/updateProduct.service";

export default async function updateProductController(request, response) {
  try {
    const { id } = request.params;

    const update = await updateProductService(request.body, id);

    return response.status(200).json({
      message: "Atualizado",
      product: update,
    });
  } catch (error) {
    return response.status(400).json({
      message: error.message,
    });
  }
}
