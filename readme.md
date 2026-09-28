# Alonso's Product API

## Description

This project is a RESTful Product API built using Node.js, Express, Mongoose, and MongoDB Atlas.

The API allows users to create, view, update, and delete products. It also supports filtering products by category and price, sorting by price, and pagination.

## Technologies Used

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* Nodemon
* dotenv

## Installation

Install the required packages by running:

```bash
npm install express mongoose dotenv
npm install --save-dev nodemon
```

## Setup

1. Create a `.env` file in the project folder.
2. Add your MongoDB Atlas connection string:

```text
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

3. Replace the connection string with your actual MongoDB Atlas URI.

## Running the Project

Start the server using:

```bash
npm run dev
```

The API will run at:

`http://localhost:3000`

Nodemon automatically restarts the server when changes are made to the JavaScript files.

## API Endpoints

| Method | Endpoint            | Description      |
| ------ | ------------------- | ---------------- |
| POST   | `/api/products`     | Create a product |
| GET    | `/api/products`     | Get all products |
| GET    | `/api/products/:id` | Get one product  |
| PUT    | `/api/products/:id` | Update a product |
| DELETE | `/api/products/:id` | Delete a product |

## Query Parameters

The API supports filtering, sorting, and pagination.

Examples:

* Filter by category: `?category=Electronics`
* Filter by price: `?minPrice=20&maxPrice=100`
* Sort by lowest price: `?sortBy=price_asc`
* Sort by highest price: `?sortBy=price_desc`
* Pagination: `?page=1&limit=5`

## Testing

The API was tested using Postman.

Testing included creating products, filtering by price, sorting products from lowest to highest and highest to lowest, pagination, updating products, and deleting products.

## Reflection

During this project, I practiced building a RESTful API using Express and connecting it to MongoDB Atlas with Mongoose.

One of the main parts of the project was setting up the database connection and making sure the API could create and retrieve products. I also practiced using CRUD operations to manage product data.

I used Postman to test the endpoints and verify that filtering, sorting, and pagination worked correctly. Using Nodemon made development easier because the server restarted automatically when I saved changes.

This project helped me better understand how an API communicates with a database and how to organize a backend project into separate files.
