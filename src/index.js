require("dotenv").config();
const { urlencoded } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./Routes");
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000);
