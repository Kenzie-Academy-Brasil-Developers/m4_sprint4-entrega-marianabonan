import database from "../../database";

export const listCategoryService = async () => {
  try {
    const response = await database.query(`SELECT * FROM categories`);
    return response.rows;
  } catch (error) {
    throw new Error(error);
  }
};
