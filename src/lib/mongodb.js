import mongoose from 'mongoose';

// Get MongoDB connection string from .env.local file
const mongoURL = process.env.MONGODB_URL;

// This function connects your app to MongoDB
const connectToMongoDb = async () => {
    // If no connection string found, throw error
    if (!mongoURL) {
        throw new Error('MongoDB URL not found in environment variables');
    }

    // If already connected, do nothing
    if (mongoose.connection.readyState === 1) {
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        // Try to connect to MongoDB
        await mongoose.connect(mongoURL);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw new Error('Failed to connect to MongoDB');
    }
};

export default connectToMongoDb;
