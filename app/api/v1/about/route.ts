import ConnectDB from "@/config/ConnectDB"
import about from "@/models/about";
import Unstructured from "@/models/unstructured"
import { NextResponse } from "next/server";

export const GET=async()=>{
    try{
        await ConnectDB()
        const unst : any = await Unstructured.findOne({relation:"about"});
        const cards:any[] = await about.find();

        const sendings:{content:string , cards:any[], about:any} ={
            content:unst?.content,
            cards:unst?.cards,
            about:cards
        }

        return NextResponse.json(sendings)
    }catch(err){
        console.log(err)
        return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
    }
}