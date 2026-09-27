// Handles the MongoDB connection

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // Connect to the database using the URI from .env
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");
  } catch (error) {
    // Show an error if the database connection fails
    console.error("MongoDB connection error:", error.message);
  }
};

module.exports = connectDB;