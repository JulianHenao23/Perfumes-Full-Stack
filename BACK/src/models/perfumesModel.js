import mongoose from "mongoose";

const perfumeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
}, { timestamps: true });

const Perfume = mongoose.model("Perfume", perfumeSchema);

export default Perfume;