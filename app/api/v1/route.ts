import ConnectDB from "@/config/ConnectDB";
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
    const content = await Unstructured.findOne({ relation: "about" });
    const servList = await service.find({}).limit(8);
    const productList = await product.find({}).sort({ _id: -1 }).limit(7);
    const slideList = await slide.find({}).sort({ _id: -1 });
    const blogList = await blog.find({}).sort({ _id: -1 }).limit(12);
    const bookList = await book.find({}).sort({ _id: -1 }).limit(8);

    const sendableData = {
      about: content,
      services: servList,
      products: productList,
      slides: slideList,
      blogs: blogList,
      books: bookList,
    };

    console.log(sendableData)

    return NextResponse.json(sendableData)
  } catch (error) {
    return NextResponse.json({ msg: "Internal Error" }, { status: 500 });
  }
};