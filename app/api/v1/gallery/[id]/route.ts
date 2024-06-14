import ConnectDB from "@/config/ConnectDB";
import gallery from "@/models/gallery";
import { deleteImage } from "@/utility/ImageRemove";
import { NextResponse } from "next/server";

export const DELETE = async (req: any) => {
  try {
    await ConnectDB();

    const requestedUrl = req?.url;
    if (!requestedUrl) {
      throw new Error("Invalid URL");
    }

    const idOfData = requestedUrl.split("/").pop();
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }

    const data: any = await gallery.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    // delete image
    await deleteImage(data.image);

    // delete from db
    await gallery.deleteOne({ _id: idOfData });

    // response
    return NextResponse.json({ error: false }, { status: 200 });
  } catch (error: any) {
    console.error("Error in DELETE handler:", error.message);
    return NextResponse.json(
      { error: true, message: error.message },
      { status: 400 }
    );
  }
};
