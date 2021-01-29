const { urlencoded } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./Routes");
const mongoose = require("mongoose");

app.use(
  cors({
    origin: "https://radioquiz.ajp2511.vercel.app",
    optionsSuccessStatus: 200,
  })
);

mongoose
  .connect(process.env.MONGO_URL || "mongodb://localhost:27017/quiz", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("conexão com o banco de dados estabelecida");
  });

app.use(urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000);
