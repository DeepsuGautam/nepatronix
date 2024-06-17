import ConnectDB from "@/config/ConnectDB"
import slide from "@/models/slide";
import { NextResponse } from "next/server";

export const GET=async()=>{
    try{
        await ConnectDB()
        const slideData : any = await slide.find({}).sort({_id:-1});

        return NextResponse.json(slideData)
    }catch(err){
        console.log(err)
        return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
    }
}