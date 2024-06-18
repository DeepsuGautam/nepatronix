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

const event = mongoose.models.event || mongoose.model("event", schema);

export default event;