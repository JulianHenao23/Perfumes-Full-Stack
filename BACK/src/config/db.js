import dns from "dns";
import mongoose from "mongoose";

dns.setServers(["1.1.1.1", "1.0.0.1"]);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Conectado a MongoDB correctamente");
  } catch (error) {
    console.error("ERROR COMPLETO:");
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;