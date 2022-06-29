import database from "../../database";

export const createCategoryService = async (name) => {
  try {
    const res = await database.query(
      `INSERT INTO categories(name) VALUES($1) RETURNING *;`,
      [name]
    );
    console.log(res);

    return res.rows[0];
  } catch (error) {
    throw new Error(error);
  }
};
