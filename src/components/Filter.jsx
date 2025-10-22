export default function Filter({ search = "", onSearchChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange?.(e.target.value)}
        aria-label="Search"
      />
    </div>
  );
} 