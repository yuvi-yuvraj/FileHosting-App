const mongoose = require("mongoose");

require("dotenv").config();

const dbUrl = process.env.MONGODB_URL;
const options = {
  autoIndex: true,
};

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, options);
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
