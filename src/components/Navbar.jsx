function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="logo">
          A.M
        </a>

        <div className="nav-links">
          <a href="#about">Profile</a>
          <a href="#skills">Capabilities</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;