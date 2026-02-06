//Mongo db
import mongoose from "mongoose";


export const connectDB = async(): Promise<void> => {
    try{
        const mongoURL = process.env['MONGODB_URL'];

        if(!mongoURL){
            throw new Error('MONGODB_URL is not defined in the env variables!!');
        }
        await mongoose.connect(mongoURL);
        
        process.on('SIGINT', async()=>{
            await mongoose.connection.close();
            process.exit(0);
        });
    }catch(err){
        throw new Error(`Failed to connect to MongoDB: ${err}`);
    }
};

export const disconnectDB = async (): Promise<void> => {
    try {
        await mongoose.connection.close();
    } catch (err) {
        
    }
}