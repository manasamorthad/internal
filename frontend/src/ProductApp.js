import React, { useState } from "react";

const ProductApp = () => {
  const [id, setId] = useState("");
  const [product, setProduct] = useState(null);
  const [error, setError] = useState("");

  const [newProduct, setNewProduct] = useState({
    id: "",
    name: "",
    category: "",
    price: "",
  });

  // Fetch product by ID
  const getProduct = async () => {
    if (!id) {
      setError("Please enter product ID");
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/products/${id}`);
      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
        setProduct(null);
      } else {
        setProduct(data);
        setError("");
      }
    } catch (err) {
      setError("Server not reachable");
    }
  };

  // Add new product
  const handleAddProduct = async () => {
    if (
      !newProduct.id ||
      !newProduct.name ||
      !newProduct.category ||
      !newProduct.price
    ) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: Number(newProduct.id),
          name: newProduct.name,
          category: newProduct.category,
          price: Number(newProduct.price),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error);
      } else {
        setError("");
        alert("Product added successfully!");
      }
    } catch (err) {
      setError("Server not reachable");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product App</h2>

      {/* Get Product */}
      <h3>Get Product by ID</h3>
      <input
        type="number"
        placeholder="Enter Product ID"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <button onClick={getProduct}>Search</button>

      {product && (
        <p>
          <strong>Found:</strong> {product.name} | {product.category} | ₹{product.price}
        </p>
      )}

      <hr />

      {/* Add Product */}
      <h3>Add New Product</h3>
      <input
        type="number"
        placeholder="ID"
        value={newProduct.id}
        onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Name"
        value={newProduct.name}
        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Category"
        value={newProduct.category}
        onChange={(e) =>
          setNewProduct({ ...newProduct, category: e.target.value })
        }
      />
      <br />
      <input
        type="number"
        placeholder="Price"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />
      <br />
      <button onClick={handleAddProduct}>Add Product</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ProductApp;