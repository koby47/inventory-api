import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number,  },
  price: { type: Number,  },
  supplier: { 
    name: { type: String,  }, 
    contact: { type: String,  },
    email: { type: String }
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Product", ProductSchema);