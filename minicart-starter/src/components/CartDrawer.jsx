import React from "react";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";

export default function CartDrawer({ open, onClose, onDemoAction }) {
  if (!open) return null;

  return (
    <div className="drawer-backdrop" onMouseDown={onClose}>
      <aside className="cart-drawer" onMouseDown={(event) => event.stopPropagation()}>
        <div className="drawer-header">
          <div>
            <p className="eyebrow">YOUR SELECTION</p>
            <h2>Shopping bag <span className="drawer-count">—</span></h2>
          </div>
          <button className="icon-button" onClick={onClose} aria-label="Fermer le panier"><X size={20}/></button>
        </div>
        <div className="drawer-empty">
          <div className="empty-icon"><ShoppingBag size={27}/></div>
          <h3>Your bag is waiting</h3>
          <p>Lovely things belong here. Add a product to get started.</p>
          <button className="text-button" onClick={onClose}>Continue shopping</button>
        </div>
        <div className="drawer-learning-note">
          <strong>Redux practice area</strong>
          <span>Les lignes du panier, les quantités et le total seront connectés au Store pendant le TP.</span>
        </div>
        <div className="drawer-footer">
          <div className="subtotal"><span>Subtotal</span><strong>$0.00</strong></div>
          <button className="checkout-button" onClick={() => onDemoAction("Le checkout est hors périmètre de ce TP débutant.")}>Continue to checkout <span>→</span></button>
          <p>Shipping and taxes calculated at checkout.</p>
        </div>
      </aside>
    </div>
  );
}
