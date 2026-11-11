import React from "react";
import { Heart, Plus, Star } from "lucide-react";

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <div className={`product-image-wrap ${product.tone}`}>
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <button className="favorite-button" aria-label={`Ajouter ${product.name} aux favoris`} onClick={() => onAdd("favorite", product)}>
          <Heart size={17}/>
        </button>
        <img className="product-image" src={product.image} alt={product.name} loading="lazy"/>
        <button className="quick-add" onClick={() => onAdd("cart", product)}>
          <Plus size={16}/> Add to bag
        </button>
      </div>
      <div className="product-info">
        <div>
          <p className="product-category">{product.category}</p>
          <h3>{product.name}</h3>
        </div>
        <div className="product-price">
          <strong>${product.price.toFixed(2)}</strong>
          {product.oldPrice && <del>${product.oldPrice.toFixed(2)}</del>}
        </div>
      </div>
      <div className="product-rating">
        <Star size={13} fill="currentColor"/>
        <span>{product.rating}</span>
        <span className="review-count">({product.reviews} reviews)</span>
      </div>
    </article>
  );
}
