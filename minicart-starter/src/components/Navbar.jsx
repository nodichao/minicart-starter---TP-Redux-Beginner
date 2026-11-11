import React from "react";
import { ShoppingBag, Search, Menu } from "lucide-react";

export default function Navbar({ onCartClick, cartCount }) {
  return (
    <header className="navbar">
      <a className="brand" href="#" aria-label="MiniCart accueil">
        <span className="brand-mark"><ShoppingBag size={18} strokeWidth={2.2} /></span>
        <span>mini<span className="brand-light">cart</span></span>
      </a>
      <nav className="nav-links" aria-label="Navigation principale">
        <a className="active" href="#shop">Shop</a>
        <a href="#story">Our story</a>
        <a href="#journal">Journal</a>
      </nav>
      <div className="nav-actions">
        <button className="icon-button search-button" aria-label="Rechercher"><Search size={19}/></button>
        <button className="cart-button" onClick={onCartClick}>
          <ShoppingBag size={17}/>
          <span>My bag</span>
          <span className="cart-count">{cartCount}</span>
        </button>
        <button className="icon-button mobile-menu" aria-label="Ouvrir le menu"><Menu size={21}/></button>
      </div>
    </header>
  );
}
