// db.js

const mysql = require("mysql");

const db = mysql.createPool({
  host: "consulta_coaf.mysql.dbaas.com.br",
  user: "consulta_coaf",
  password: "Toriba@2023",
  database: "consulta_coaf",
  connectionLimit: 10,
  connectTimeout: 30000,
});

db.getConnection((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conexão com o banco de dados estabelecida");
  }
});

module.exports = db;
