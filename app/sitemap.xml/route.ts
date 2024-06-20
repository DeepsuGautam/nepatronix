import ConnectDB from "@/config/ConnectDB";
import blog from "@/models/blog";
import book from "@/models/book";
import event from "@/models/event";
import product from "@/models/product";
import service from "@/models/service";
import shop from "@/models/shop";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await ConnectDB();
    const fetchAll = await fetchAllUri();
    const sitemap = generateSitemap(fetchAll);

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "stale-while-revalidate, s-maxage=3600",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: true }, { status: 500 });
  }
};

const fetchAllUri = async () => {
  const uriList = [
    "/",
    "/about",
    "/services",
    "/products",
    "/blogs",
    "/books",
    "/gallery",
    "/contact",
  ];
  const serv = await service.find({}).select("_id");
  const products = await product.find({}).select("_id");
  const blogs = await blog.find({}).select("_id");
  const books = await book.find({}).select("_id");
  const shops = await shop.find({}).select("_id");
  const events = await event.find({}).select("_id");

  const serviceUris = serv.map((item) => `/services/${item._id}`);
  const productUris = products.map((item) => `/products/${item._id}`);
  const blogUris = blogs.map((item) => `/blogs/${item._id}`);
  const bookUris = books.map((item) => `/books/${item._id}`);
  const shopUrl = shops.map((item) => `/shop/${item?._id}`);
  const eventUrl = events.map((item) => `/events/${item?._id}`);

  const allList = [
    ...uriList,
    ...serviceUris,
    ...productUris,
    ...blogUris,
    ...bookUris,
    ...shopUrl,
    ...eventUrl,
  ];
  return allList;
};

const generateSitemap = (urls: any) => {
  const baseUrl = "https://nepatronix.org";
  let sitemap = '<?xml version="1.0" encoding="UTF-8"?>';
  sitemap += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  urls.forEach((url: any) => {
    sitemap += "<url>";
    sitemap += `<loc>${baseUrl}${url}</loc>`;
    sitemap += "<changefreq>weekly</changefreq>";
    sitemap += "<priority>0.8</priority>";
    sitemap += "</url>";
  });

  sitemap += "</urlset>";
  return sitemap;
};
