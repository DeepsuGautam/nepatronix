import mongoose from "mongoose";

const types = {
    type:String,
    unique:false,
    required:true
}


const schema = new mongoose.Schema({
    title:types,
    description: types,
    content:types,
    image:types
});

const blog = mongoose?.models?.blog || mongoose?.model("blog", schema);

export default blog;