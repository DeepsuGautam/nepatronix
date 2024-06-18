import ConnectDB from "@/config/ConnectDB";
import event from "@/models/event";
import { deleteQuillImages } from "@/Quill/QuillDelete";
import { deleteImage } from "@/utility/ImageRemove";
import { NextResponse } from "next/server";

export const DELETE = async (req: any) => {
  try {
    await ConnectDB();

    const requestedUrl = req?.url;

    const idOfData = requestedUrl.split("/").pop();
    if (!idOfData) {
      throw new Error("Invalid ID in URL");
    }

    const data: any = await event.findOne({ _id: idOfData });
    if (!data) {
      throw new Error("Data Not Found!");
    }

    // delete image
    await deleteImage(data?.image);
    for (let i = 0; i < 3; i++) {
      await deleteImage(data?.images[i]);
    }
    await deleteQuillImages(data?.content);

    // delete from db
    await event.deleteOne({ _id: idOfData });

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
