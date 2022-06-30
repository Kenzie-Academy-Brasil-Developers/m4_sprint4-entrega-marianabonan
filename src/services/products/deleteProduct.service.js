import database from "../../database";

export default async function deleteProductService({ id }) {
  try {
    const response = await database.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    return {
      message: "Category deleted",
      category: response.rows[0],
    };
  } catch (error) {
    throw newError(error);
  }
}
