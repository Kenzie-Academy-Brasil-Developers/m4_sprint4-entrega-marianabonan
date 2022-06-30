import createProductService from "../../services/products/createProduct.service";

export default async function createProductController(request, response) {
  try {
    const { name, price, category_id } = request.body;
    const product = await createProductService({ name, price, category_id });

    return response
      .status(201)
      .json({ message: "Product created", product: product });
  } catch (error) {
    return response.status(400).json({
      status: "Error",
      message: error.message,
    });
  }
}
