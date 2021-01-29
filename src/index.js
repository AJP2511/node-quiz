const { urlencoded } = require("express");
const express = require("express");
const app = express();
const routes = require("./Routes");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/quiz", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000);
