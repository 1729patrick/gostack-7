const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.json({ message: "Este é a retorno da sua requisição para a rota /" });
});

server.listen(3333);
