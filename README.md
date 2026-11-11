# MiniCart — Redux Toolkit Beginner Starter

MiniCart est un mini-projet e-commerce conçu comme support de TP pour apprendre les fondamentaux de Redux Toolkit.

> Le starter fournit déjà l'interface React, les composants, les données locales et le responsive design. Les fonctionnalités Redux du panier restent volontairement à implémenter pendant le TP.

## Prérequis

- Node.js (version LTS recommandée)
- npm
- Connaissances de base en React : composants, props, événements, `useState`, `useEffect`

## Installation

```bash
npm install
npm run dev
```

Ouvre ensuite l'URL locale indiquée par Vite.

## Stack

- React
- Vite
- JavaScript
- Redux Toolkit
- React Redux
- Lucide React

## Ce qui est déjà prêt

- Interface responsive
- Catalogue de démonstration en données locales
- Filtrage visuel par catégorie
- Composants `Navbar`, `ProductCard`, `ProductList`, `CartDrawer`
- Ouverture et fermeture du panneau panier
- Messages pédagogiques temporaires sur les actions à implémenter

## Ce qui reste à implémenter dans le TP

1. Créer `cartSlice` avec `createSlice`.
2. Définir le state initial du panier.
3. Ajouter les reducers `addToCart`, `removeFromCart`, `incrementQuantity` et `decrementQuantity`.
4. Configurer le Store avec `configureStore`.
5. Connecter React au Store avec `Provider`.
6. Utiliser `useDispatch` dans les composants.
7. Utiliser `useSelector` pour lire le panier.
8. Calculer le nombre d'articles et le sous-total.

## Organisation

```text
src/
├── app/
│   └── store.js
├── components/
├── data/
│   └── products.js
├── features/
│   └── cart/
│       └── cartSlice.js
├── App.jsx
├── main.jsx
└── index.css
```

## Périmètre pédagogique

Ce TP est volontairement limité au panier côté client. Il n'inclut pas de backend, d'authentification, de paiement, de persistance ou d'appel API. Ces sujets pourront faire l'objet d'extensions.

## Licence

Projet pédagogique — libre d'utilisation et de modification.
