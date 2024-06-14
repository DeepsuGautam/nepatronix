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

const product = mongoose?.models?.product || mongoose?.model("product", schema);

export default product;