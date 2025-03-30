import mongoose from "mongoose"

const connectDB = async () => {
    try {
        if (mongoose.connections[0].readyState) {
            return; // Already connected
        }
        
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("Connected to the database");
    } catch (err) {
        console.error("Database connection error:", err);
        throw err; // Rethrow to handle it in the calling function
    }
}

export default connectDB;