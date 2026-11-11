import React from "react";
import ProductCard from "./ProductCard.jsx";

export default function ProductList({ products, onAdd }) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  );
}
