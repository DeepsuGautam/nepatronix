import mongoose from "mongoose";

const dbURL: string | undefined = process.env.NEXT_APP_DB;

const ConnectDB = async () => {
  try {
    await mongoose.connect(
      dbURL || "mongodb://127.0.0.1:27017/nepatronix_update"
    );
    await mongoose.connection.setMaxListeners(20);

    await mongoose.connection.on("error", (error) => {
      console.log(error);
    });
    await mongoose.connection.once("open", () => {
      console.log("Connected DB!");
    });

    return mongoose;
  } catch (error: any) {
    console.log(error);
  }
};


export default ConnectDB;