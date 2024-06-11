# Catalog API

This README provides an overview of the Catalog API, including instructions for setting up and using the provided endpoints to manage product data.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
  - [Endpoints](#endpoints)
    - [Create Product](#create-product)
    - [Update Product](#update-product)
    - [Get Products](#get-products)
    - [Get Product by ID](#get-product-by-id)
    - [Delete Product](#delete-product)
- [Error Handling](#error-handling)
- [Dependencies](#dependencies)

## Introduction

The Catalog API allows you to manage products in a catalog. It supports operations such as creating, updating, retrieving, and deleting products. This API is built using Express and TypeScript, and it employs validation mechanisms to ensure data integrity.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_directory>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

## Usage

### Endpoints

#### Create Product

- **URL**: `/products`
- **Method**: `POST`
- **Description**: Creates a new product.
- **Request Body**:
  ```json
  {
    "name": "string",
    "price": "number",
    "description": "string"
  }
  ```
- **Responses**:
  - `201 Created`: Product created successfully.
  - `400 Bad Request`: Validation errors.
  - `500 Internal Server Error`: Server error.

#### Update Product

- **URL**: `/products/:id`
- **Method**: `PATCH`
- **Description**: Updates an existing product.
- **Request Body**:
  ```json
  {
    "name": "string",
    "price": "number",
    "description": "string"
  }
  ```
- **Responses**:
  - `200 OK`: Product updated successfully.
  - `400 Bad Request`: Validation errors.
  - `500 Internal Server Error`: Server error.

#### Get Products

- **URL**: `/products`
- **Method**: `GET`
- **Description**: Retrieves a list of products.
- **Query Parameters**:
  - `limit`: Number of products to retrieve.
  - `offset`: Number of products to skip before starting to collect the result set.
- **Responses**:
  - `200 OK`: Products retrieved successfully.
  - `500 Internal Server Error`: Server error.

#### Get Product by ID

- **URL**: `/products/:id`
- **Method**: `GET`
- **Description**: Retrieves a single product by its ID.
- **Responses**:
  - `200 OK`: Product retrieved successfully.
  - `500 Internal Server Error`: Server error.

#### Delete Product

- **URL**: `/products/:id`
- **Method**: `DELETE`
- **Description**: Deletes a product by its ID.
- **Responses**:
  - `200 OK`: Product deleted successfully.
  - `500 Internal Server Error`: Server error.

## Error Handling

The API returns appropriate HTTP status codes and error messages for various error conditions:

- `400 Bad Request`: Returned when request validation fails.
- `500 Internal Server Error`: Returned when an unexpected server error occurs.

## Dependencies

- **express**: Web framework for Node.js
- **typescript**: TypeScript language
- **class-transformer**: Used for transforming plain objects into class instances
- **class-validator**: Used for validating class instances

## Example

Here's a brief example to demonstrate how to create a new product using the API:

```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
        "name": "New Product",
        "price": 99.99,
        "description": "A description of the new product."
      }'
```

This command creates a new product with the provided details.

For more information on usage and additional examples, refer to the documentation or source code comments.

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or find any bugs.

---

This README provides the necessary information to get started with the Catalog API. For further details, refer to the source code and comments within each file.
