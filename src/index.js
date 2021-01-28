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

const corsOptions = {
  origin: "https://radioquiz.ajp2511.vercel.app/",
  optionsSuccessStatus: 200,
};

app.use(urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000);
