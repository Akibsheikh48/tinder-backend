import express from "express";
import mongoose from "mongoose";
import Cors from 'cors';
import Cards from "./dbCards.js";

const app = express();

const port = process.env.PORT || 8001;

const connecting_url =
  "mongodb+srv://akib:A1b2c3d4@cluster0.hwavo.mongodb.net/tinderdb?retryWrites=true&w=majority";


app.use(express.json());
app.use(Cors());

mongoose.connect(connecting_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => res.status(200).send("hello"));

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.listen(port, () => console.log(`listen${port}`));
