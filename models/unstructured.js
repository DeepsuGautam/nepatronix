import mongoose from "mongoose";
const types = {
    type:String,
    unique:false,
    required:true
}


const cards = new mongoose.Schema({
  title:types,
  value:{
    type:Number,
    unique:false,
    required:true
  }
})

const schema = new mongoose.Schema({
  relation: {
    type:String,
    unique:true,
    required:true
},
  content:types,
  cards:[cards]
});

const Unstructured =
  mongoose?.models?.unstructured || mongoose?.model("unstructured", schema);

  export default Unstructured;