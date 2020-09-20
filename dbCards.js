import mongoose from "mongoose";

const cardShema = mongoose.Schema({
  name: String,
  imgUrl: String,
});

export default mongoose.model("cards", cardShema);
