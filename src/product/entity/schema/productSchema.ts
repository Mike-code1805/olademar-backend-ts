import mongoose from "mongoose";
import { Product } from "../types/Product";

const Schema = mongoose.Schema;

export const productSchemma = new Schema<Product>({
    title: { 
        type: String, 
        required: true, 
    },
    desc: {
        type: String,
    },
    img: {
        type: String,
    },
    categories: [{
        type: String,
    }],
    dimension: { 
        type: String,
    },
    price:{
        type: Number,
    },
    created_at: { 
        type: Date,
        default: Date.now,
    },
    updated_at: { 
        type: Date,
        default: Date.now,
    }
});
