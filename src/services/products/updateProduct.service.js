import database from "../../database";

export default async function updateProductService(data, id) {
  try {
    const foundId = await database.query("SELECT * FROM products WHERE id=$1", [
      id,
    ]);

    if (foundId.rowCount === 0) {
      throw "Id not found";
    }

    const response = await database.query(
      "UPDATE products SET name=$1, price=$2, category_id=$3 WHERE id=$4 RETURNING *",
      [
        data.name || foundId.rows[0].name,
        data.price || foundId.rows[0].price,
        data.category_id || foundId.rows[0].category_id,
        id,
      ]
    );

    return response.rows[0];
  } catch (error) {
    throw new Error(error);
  }
}
