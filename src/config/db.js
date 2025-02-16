import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default async function connectDB(){
    try {
        const con = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`Connected to MongoDb${con.connection.host}`);
    } catch (error) {
        console.log("Failed to Connect",error);
        process.exit(1)
    }
}