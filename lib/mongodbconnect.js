import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB.");
    } catch (err) {
        console.log("Error connecting to mongoDB", err);
    }
};

export default connectMongoDB;
