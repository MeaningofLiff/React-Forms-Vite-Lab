// src/components/Item.jsx
export default function Item({ name, category, isInCart, onToggleInCart }) {
  return (
    <li className={`item ${isInCart ? "in-cart" : ""}`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={onToggleInCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
} 