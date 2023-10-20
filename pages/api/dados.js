// pages/api/dados.js

import db from "../../db";

export default (req, res) => {
  if (req.method === "GET") {
    db.query("SELECT * FROM pessoas", (err, results) => {
      if (err) {
        console.error("Erro ao buscar dados:", err);
        res.status(500).json({ error: "Erro ao buscar dados" });
      } else {
        res.status(200).json(results);
      }
    });
  } else {
    res.status(405).end();
  }
};
