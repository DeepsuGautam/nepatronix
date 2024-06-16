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

    // Fetch unstructured content related to "about"
    const content = await Unstructured.findOne({ relation: "about" });

    // Fetch lists of services, products, slides, blogs, and books
    const servListPromise = service.find({}).limit(8);
    const productListPromise = product.find({}).sort({ _id: -1 }).limit(7);
    const slideListPromise = slide.find({}).sort({ _id: -1 });
    const blogListPromise = blog.find({}).sort({ _id: -1 }).limit(12);
    const bookListPromise = book.find({}).sort({ _id: -1 }).limit(8);

    // Await all promises concurrently
    const [servList, productList, slideList, blogList, bookList] = await Promise.all([
      servListPromise,
      productListPromise,
      slideListPromise,
      blogListPromise,
      bookListPromise,
    ]);

    // Construct the data to send in the response
    const sendableData = {
      about: content,
      services: servList,
      products: productList,
      slides: slideList,
      blogs: blogList,
      books: bookList,
    };

    return new NextResponse(JSON.stringify(sendableData), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({error:"Ïnternal ERROR"},{status:200})
  }
};