import database from "../../database";

export const createCategoryService = async (name) => {
  try {
    const res = await database.query(
      `
                  INSERT INTO categories (name)
                  VALUES ($1) RETURNING *;
             `,
      [name]
    );

    console.log("res.rows");

    if (!res.rows) {
      throw "Erro ao criar categoria";
    }

    return {
      message: "Category created",
      category: res.rows[0],
    };
  } catch (error) {
    throw new Error(error);
  }
};
