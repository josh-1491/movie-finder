import { Link } from 'react-router-dom';
import '../Navbar.css';

function NavBar({ theme, onToggleTheme }) {
  return (
    <nav className="movie-navbar">
      <div className="navbar-logo">Movie App</div>
      <button
        className="theme-toggle"
        type="button"
        role="switch"
        aria-label="Dark mode"
        aria-checked={theme === 'dark'}
        onClick={onToggleTheme}
      >
        <span>Light</span>
        <span className="theme-toggle-track" aria-hidden="true">
          <span className="theme-toggle-thumb" />
        </span>
        <span>Dark</span>
      </button>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;