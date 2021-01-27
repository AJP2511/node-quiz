const route = require("express").Router();
const Usuario = require("./SchemaPlayer");

route.get("/", async (req, res) => {
  const user = await Usuario.find();

  return res.json(user);
});

route.post("/", async (req, res) => {
  const { nome, pontos } = req.body;

  const user = await Usuario.create({
    nome,
    pontos,
  });

  return res.json(user);
});

module.exports = route;
