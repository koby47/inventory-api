import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number,  },
  price: { type: Number,  required: true},
  supplier: { 
    name: { type: String, required: true }, 
    contact: { type: String,  },
    email: { type: String }
  },
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  // timestamps: true
});

export default mongoose.model("Product", ProductSchema);