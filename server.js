// Main server file for the Product API

require("dotenv").config();

const express = require("express");
const connectDB = require("./config/connection");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Allows the server to read JSON data from requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use the product routes
app.use("/api/products", productRoutes);

// Get the port from the .env file
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});