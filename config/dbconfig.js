// This file is used to connect API with Db

import mongoose from "mongoose";
// const DATABASE_NAME = "financial_db"
const CONNECTION_URI='mongodb://0.0.0.0:27017/financial_db'

export const connectToMongoDb = () => {
  try {
    const connect = mongoose.connect(CONNECTION_URI)

    if(connect){
      console.log("Database conected at", CONNECTION_URI);
    }
  } catch (error) {
    console.log("Db connection Error", error.message);
  }
}