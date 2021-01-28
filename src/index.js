const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./Routes");
const mongoose = require("mongoose");

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://radioquiz.ajp2511.vercel.app"
  );
  app.use(cors());
  next();
});

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000);
