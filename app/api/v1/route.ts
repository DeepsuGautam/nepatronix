import ConnectDB from "@/config/ConnectDB";
import about from "@/models/about";
import blog from "@/models/blog";
import book from "@/models/book";
import product from "@/models/product";
import service from "@/models/service";
import slide from "@/models/slide";
import Unstructured from "@/models/unstructured";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDB();
    const content: any  = await Unstructured.findOne({ relation: "about" });
    const servList: any[] = await service.find({}).limit(8);
    const productList: any[] = await product.find({}).limit(7);
    const slideList:any[] = await slide.find({}).sort({_id:-1});
    const blogList:any[] = await blog.find({}).sort({_id:-1}).limit(12);
    const bookList:any[] = await book.find({}).sort({_id:-1}).limit(8);

    const sendableData: {
      about: any;
      services: any[];
      products: any[];
      slides:any[];
      blogs:any[];
      books:any[];
    } = {
      about: content,
      services: servList,
      products: productList,
      slides: slideList,
      blogs:blogList,
      books:bookList
    };

    return NextResponse.json(sendableData);
  } catch (error: any) {
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};
