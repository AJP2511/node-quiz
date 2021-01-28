const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: String,
  pontos: Number,
  expireAfterSeconds: 60,
});

module.exports = mongoose.model("Usuario", UserSchema);
