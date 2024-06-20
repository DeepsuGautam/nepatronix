import mongoose from "mongoose";

const types = {
  type: String,
  unique: false,
  required: true,
};

const schema = new mongoose.Schema({
  title: types,
  description: types,
  content: types,
  image: types,
  price: types,
  tags: [String],
  components:[String],
  icon:types,
});

const shop = mongoose?.models?.shop || mongoose?.model("shop", schema);

export default shop;
