import database from "../../database/index";

export default async function listProductService() {
  try {
    const response = await database.query("SELECT * FROM products");
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
}
