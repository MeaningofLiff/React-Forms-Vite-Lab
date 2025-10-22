import { useState } from "react";

import Header from "./Header";
import Search from "./Search";              // ✅ correct
import CategoryFilter from "./Filter";      // ✅ your file is Filter.jsx
import ShoppingList from "./ShoppingList";  // ✅ use ShoppingList, not ProductList
import ItemForm from "./ItemForm";
import initialItems from "../data/items";   // ✅ go up one level

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const visibleItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  function handleSearchChange(text) {
    setSearchText(text);
  }

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  function handleItemFormSubmit(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  return (
    <div className="App">
      <h1>Products</h1>

      <Search value={searchText} onSearchChange={handleSearchChange} />

      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <ItemForm onItemFormSubmit={handleItemFormSubmit} />

      <ShoppingList items={visibleItems} />
    </div>
  );
} 