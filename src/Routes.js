const route = require("express").Router();
const Usuario = require("./SchemaPlayer");

route.get("/", async (req, res) => {
  const user = await Usuario.find({ pontos: { $gt: 40 } }).sort({
    pontos: -1,
  });

  return res.json(user);
});

route.post("/", async (req, res) => {
  const { nome, pontos } = req.body;

  const sameUsers = await Usuario.find({ nome: nome }, (err) => {
    if (err) console.log(err);
  });

  if (sameUsers.length > 0) {
    Usuario.deleteMany({ nome: sameUsers[0].nome }, (err) => {
      if (err) console.log(err);
    });
  }

  const user = await Usuario.create({
    nome,
    pontos,
  });

  return res.json(user);
});

module.exports = route;
