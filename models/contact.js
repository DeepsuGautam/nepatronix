import mongoose from "mongoose";
const schema = new mongoose.Schema({
    fName:{
        type:String,
        required:true
    },lName:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },found:{
        type:String,
        required:true
    },message:{
        type:String,
        required:true
    }
});

const contact = mongoose?.models?.contact || mongoose.model("contact", schema);

export default contact;