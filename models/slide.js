import mongoose from "mongoose";

const types = {
  type: String,
  unique: false,
  required: true,
};

const schema = new mongoose.Schema({
  title: types,
  content: types,
  image: types,
  bg:String,
  button1:Object,
  button2:Object
});

const slide = mongoose?.models?.slide || mongoose?.model("slide", schema);

export default slide;
