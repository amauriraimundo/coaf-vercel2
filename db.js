// db.js
const dotenv = require("dotenv");
const mysql = require("mysql");
dotenv.config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
  protocol: "tcp",
});

db.getConnection((err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err);
  } else {
    console.log("Conexão com o banco de dados estabelecida");
  }
});

module.exports = db;
