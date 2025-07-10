// models/Contact.js
import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            enum: ['full-stack', 'frontend', 'backend'],
            required: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
        collection: 'contact', // ✅ Correctly placed inside the second options object
    }
);

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);
