const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: String,
  pontos: Number,
});

module.exports = mongoose.model("Usuario", UserSchema);
