const route = require("express").Router();
const Usuario = require("./SchemaPlayer");

route.get("/", async (req, res) => {
  const user = await Usuario.find({ pontos: { $gt: 40 } }).sort({ pontos: -1 });

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
