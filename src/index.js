const { urlencoded } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./Routes");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/quiz", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(urlencoded({ extended: true }));
app.use(cors({}));
app.use(express.json());
app.use(routes);

app.listen("3000");
