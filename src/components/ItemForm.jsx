// src/components/ItemForm.jsx
import { useState } from "react";

export default function ItemForm({ onItemFormSubmit }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce"); // default must be Produce

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now(),
      name: name.trim(),
      category,
    };

    onItemFormSubmit?.(newItem);

    // optional reset
    setName("");
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="item-name">Name</label>
        <input
          id="item-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="item-category">Category</label>
        <select
          id="item-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Produce</option>
          <option>Dairy</option>
          <option>Dessert</option>
          <option>Beverages</option>
          <option>Bakery</option>
        </select>
      </div>

      {/* ✅ exact label + submit type so fireEvent.submit(getByText(/Add to List/)) works */}
      <button type="submit">Add to List</button>
    </form>
  );
}
 