
import mongoose from "mongoose";

const types = {
    type:String,
    unique:false,
    required:true
}

const schema = new mongoose.Schema({
    title:types,
    image:types,
    content:types
});

const about = mongoose?.models?.about || mongoose?.model("about", schema);

export default about