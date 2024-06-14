import mongoose from "mongoose";

// Define the URL schema
const urlSchema = new mongoose.Schema({
  loc: String,
  lastmod: { type: Date, default: Date.now }
});

// Create URL model
const URL = mongoose?.models?.URL || mongoose?.model("URL", urlSchema);

export {URL}