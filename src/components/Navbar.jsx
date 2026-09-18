import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          A.M
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span aria-hidden="true">{isMenuOpen ? "\u00d7" : "\u2630"}</span>
          <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
        </button>

        <div id="primary-navigation" className={`nav-links${isMenuOpen ? " is-open" : ""}`}>
          <a href="#about" onClick={closeMenu}>Profile</a>
          <a href="#skills" onClick={closeMenu}>Capabilities</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;