import mongoose from "mongoose";

const schema = new mongoose.Schema({
  content: {
    type: String,
    unique: false,
    required: true,
  },
  cover: {
    type: String,
    unique: false,
    required: true,
  },
  images: {
    type:[String], // Define images as an array of strings
    required: true,
  },
});

const achievement = mongoose.models.achievement || mongoose.model("achievement", schema);

export default achievement;