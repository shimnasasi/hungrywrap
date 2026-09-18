import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="hw-navbar">
      <div className="hw-nav-container">

        {/* LOGO */}
        <Link
          to="/"
          className="hw-logo"
          onClick={closeMenu}
        >
          <div className="hw-logo-icon">
            🌯
          </div>

          <div className="hw-logo-text">
            <strong>The Hungry</strong>
            <span>Wrap</span>

            <small>
              Wraps so good, you'll come back for more!
            </small>
          </div>
        </Link>


        {/* NAVIGATION */}
        <nav
          className={`hw-nav-links ${
            menuOpen ? "hw-nav-open" : ""
          }`}
        >
          <Link
            to="/"
            className={isActive("/") ? "hw-active" : ""}
            onClick={closeMenu}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={isActive("/about") ? "hw-active" : ""}
            onClick={closeMenu}
          >
            About Us
          </Link>

          <Link
            to="/specials"
            className={isActive("/specials") ? "hw-active" : ""}
            onClick={closeMenu}
          >
            Specials
          </Link>

          <Link
            to="/contact"
            className={isActive("/contact") ? "hw-active" : ""}
            onClick={closeMenu}
          >
            Contact Us
          </Link>
        </nav>


        {/* ORDER BUTTON */}
        <Link
          to="/order"
          className="hw-order-btn"
          onClick={closeMenu}
        >
          Order Now
          <span>🛍</span>
        </Link>


        {/* MOBILE 3-LINE BUTTON */}
        <button
          type="button"
          className={`hw-menu-btn ${
            menuOpen ? "hw-menu-active" : ""
          }`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;