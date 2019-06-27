require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const sc = require("../serverController");
const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());

app.get("/api/parts", sc.getAllParts);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
