import mongoose from "mongoose";
const schema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },phone:{
        type:String,
        required:true
    },itemId:{
        type:String,
        required:true
    },itemName:{
        type:String,
        required:true
    },
});

const order = mongoose?.models?.order || mongoose.model("order", schema);

export default order;