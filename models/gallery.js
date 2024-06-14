import mongoose from "mongoose";

const types = {
    type:String,
    unique:false,
    required:true
}


const schema = new mongoose.Schema({
    description: types,
    image:types
});

const gallery = mongoose?.models?.gallery || mongoose?.model("gallery", schema);

export default gallery;