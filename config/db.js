import BaseError from "../utils/errorHandlers/BaseError.js";
import mongoose from "mongoose";

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
    } catch (err) {
        console.log("Couldn't connect to the databse", err);
        throw new BaseError("Connection error", 500)
    }
}

export default connect;