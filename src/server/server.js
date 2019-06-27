require("dotenv").config({ path: __dirname + "/../.env" });
const express = require("express");
const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`);
});
