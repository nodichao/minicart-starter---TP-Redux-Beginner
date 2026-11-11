import  React, { useMemo, useState } from "react";
import { ArrowDownUp, ArrowRight, Check, Leaf, ShieldCheck, Truck } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import ProductList from "./components/ProductList.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import { categories, products } from "./data/products.js";

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All items");
  const [cartOpen, setCartOpen] = useState(false);
  const [notice, setNotice] = useState("");

  const visibleProducts = useMemo(() => {
    if (activeCategory === "All items") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  function handleStarterAction(kind, product) {
    if (kind === "cart") {
      setNotice(`Mission Redux : ajouter « ${product.name} » au panier avec dispatch(addToCart(product)).`);
      return;
    }
    setNotice("Les favoris ne font pas partie du périmètre de ce TP débutant.");
  }

  return (
    <div className="app-shell">
      <div className="announcement">
        <span>Thoughtful essentials for everyday living</span>
        <span className="announcement-right">Free shipping on orders over $75 <ArrowRight size={13}/></span>
      </div>

      <Navbar onCartClick={() => setCartOpen(true)} cartCount={0}/>

      <main>
        <section className="hero" id="shop">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line"/> THE EVERYDAY EDIT</p>
            <h1>Good things.<br/><em>Simply chosen.</em></h1>
            <p className="hero-description">A considered collection of useful, beautiful things for the way you live, work and unwind.</p>
            <a className="hero-link" href="#catalogue">Explore the collection <ArrowRight size={16}/></a>
            <div className="hero-footnote"><span className="hero-dot"/> Curated with care · Made for everyday</div>
          </div>
          <div className="hero-visual">
            <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1400&q=90" alt="Intérieur lumineux et objets du quotidien"/>
            <div className="hero-stamp"><span>LESS,</span><span>BUT</span><span>BETTER.</span><small>EST. 2024</small></div>
            <div className="hero-caption">OBJECTS THAT FEEL LIKE HOME <span>01 / 04</span></div>
          </div>
        </section>

        <section className="benefits" aria-label="Nos engagements">
          <div><Truck size={18}/><span>Complimentary shipping over $75</span></div>
          <div><Leaf size={18}/><span>Thoughtful materials</span></div>
          <div><ShieldCheck size={18}/><span>Easy 30-day returns</span></div>
        </section>

        <section className="catalogue-section" id="catalogue">
          <div className="section-heading">
            <div>
              <p className="eyebrow">THE COLLECTION</p>
              <h2>Find your <em>everyday.</em></h2>
              <p className="section-description">A few well-made favourites, picked just for you.</p>
            </div>
            <button className="sort-button" onClick={() => setNotice("Le tri sera proposé dans une extension du TP.")}><ArrowDownUp size={15}/> Featured</button>
          </div>

          <div className="catalogue-toolbar">
            <div className="category-tabs" role="group" aria-label="Filtrer par catégorie">
              {categories.map((category) => (
                <button key={category} className={activeCategory === category ? "category-tab selected" : "category-tab"} onClick={() => setActiveCategory(category)}>
                  {category}
                </button>
              ))}
            </div>
            <span className="result-count">{visibleProducts.length} carefully chosen pieces</span>
          </div>

          <ProductList products={visibleProducts} onAdd={handleStarterAction}/>
        </section>

        <section className="newsletter" id="journal">
          <div>
            <p className="eyebrow">A LITTLE NOTE FROM US</p>
            <h2>Good finds, <em>occasionally.</em></h2>
            <p>New arrivals, thoughtful reads and little things worth sharing.</p>
          </div>
          <button onClick={() => setNotice("L'inscription à la newsletter est hors périmètre du TP.")}>Explore our journal <ArrowRight size={16}/></button>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#"><span className="brand-mark"><Check size={17}/></span><span>mini<span className="brand-light">cart</span></span></a>
        <span>© 2026 MiniCart Studio</span>
        <span>Small things, thoughtfully found.</span>
      </footer>

      {notice && <div className="toast" role="status"><span>{notice}</span><button onClick={() => setNotice("")}>×</button></div>}
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} onDemoAction={setNotice}/>
    </div>
  );
}
