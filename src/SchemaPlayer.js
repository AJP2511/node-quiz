const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  nome: {
    type: String,
  },
  pontos: {
    type: Number,
  },
});

module.exports = mongoose.model("Usuario", UserSchema);
