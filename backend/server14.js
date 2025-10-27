const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
app.use(cors());

app.use(express.json());
// In-memory product catalog
let products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 700 },
    { id: 2, name: "Phone", category: "Electronics", price: 500 },
    { id: 3, name: "Book", category: "Stationery", price: 20 }
];
// GET /products/:id – retrieve a product by ID
app.get("/products/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
});

// POST /products – add a new product
app.post("/products", (req, res) => {
    const { id, name, category, price } = req.body;

    // Simple validation
    if (!id || !name || !category || !price) {
        return res.status(400).json({ error: "All fields (id, name, category, price) are required." });
    }

    // Check for duplicate ID
    if (products.find(p => p.id === id)) {
        return res.status(400).json({ error: "Product ID already exists." });
    }

    const newProduct = { id, name, category, price };
    products.push(newProduct);

    res.status(201).json({
        message: "Product added successfully",
        product: newProduct
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});