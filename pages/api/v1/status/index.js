import database from "infra/database.js";

async function status(request, response) {
  try {
    const result = await database.query("SELECT 1 + 1 as sum");
    response
      .status(200)
      .json({ chave: "são acima da média", resultado: result.rows[0].sum });
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: "Internal Server Error" });
  }
}

export default status;
