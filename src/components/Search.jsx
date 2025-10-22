// src/components/Search.jsx
export default function Search({ value = "", onSearchChange }) {
  return (
    <input
      aria-label="Search"
      placeholder="Search"
      value={value}
      onChange={(e) => onSearchChange?.(e.target.value)}
      type="text"
    />
  );
} 