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

const service = mongoose?.models?.service || mongoose?.model("service", schema);

export default service;