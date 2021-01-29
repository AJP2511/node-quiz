const route = require("express").Router();
const Usuario = require("./SchemaPlayer");
const cors = require("cors");

route.get("/", async (req, res) => {
  const user = await Usuario.find({ pontos: { $gt: 40 } }).sort({
    pontos: -1,
  });

  return res.json(user);
});

route.post("/", async (req, res) => {
  const { nome, pontos } = req.body;

  const procuraUser = await Usuario.find({ nome: nome });

  Usuario.deleteMany({ nome: procuraUser[0].nome }, (err) => {
    if (err) console.log(err);
  });

  const user = await Usuario.create({
    nome,
    pontos,
  });

  return res.json(user);
});

module.exports = route;
