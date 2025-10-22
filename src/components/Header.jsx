export default function Header({ isDarkMode = false, onDarkModeToggle }) {
  return (
    <header className="header">
      <h1>Shopping List</h1>
      <button onClick={onDarkModeToggle}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
} 