import database from "../../database";

export default async function listProdutsByCategoryService({ category_id }) {
  try {
    const response = await database.query(
      "SELECT p.name, p.price, c.name category FROM products p JOIN categories c ON c.id= p.category_id WHERE c.id=$1",
      [category_id]
    );
    if (response.rows.length === 0) {
      throw "Nenhum item encontrado";
    }
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
}
