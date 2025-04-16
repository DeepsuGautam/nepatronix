"use server";
import { Document, Model } from "mongoose";

import ConnectDB from "@/configs/ConnectDB";

type GetType<T extends Document> = {
  model: Model<T>;
  find: object;
  skip: number;
  limit: number;
};

export const Get = async <T extends Document>(options: GetType<T>) => {
  await ConnectDB();
  const { model, find, skip, limit } = options;
  try {
    const data = await model.find(find).skip(skip).limit(limit).lean();
    if (!data || data.length === 0) {
      throw new Error("Data not found!");
    }
    return {
      data,
      message: `Responding with ${data.length} data item(s)!`,
    };
  } catch (error: unknown) {
    console.error("Get Error:", error);
    return {
      data: null,
      message:
        error instanceof Error ? error.message : "An unknown error occurred",
    };
  }
};
