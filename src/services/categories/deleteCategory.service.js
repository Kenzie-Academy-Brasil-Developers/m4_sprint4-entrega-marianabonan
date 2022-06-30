import database from "../../database/index";

export default async function deleteCategoryService(id) {
  try {
    const response = await database.query(
      `DELETE FROM categories WHERE id = $1 RETURNING *;`,
      [id]
    );
    return response.rows[0];
  } catch (error) {
    throw new Error(error);
  }
}
