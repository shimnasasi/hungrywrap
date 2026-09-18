import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="hw-navbar">

      <div className="hw-nav-container">

        {/* Logo */}
        <Link to="/" className="hw-logo">

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


        {/* Desktop Navigation */}
        <nav className="hw-nav-links">

          <Link to="/" className="hw-active">
            Home
          </Link>

          <Link to="/about">
            About Us
          </Link>

          <Link to="/specials">
            Specials
          </Link>

         

          <Link to="/contact">
            Contact Us
          </Link>

        </nav>


        {/* Order Button */}
        <Link to="/order" className="hw-order-btn">
          Order Now
          <span>🛍</span>
        </Link>


        {/* Mobile Menu */}
        <button className="hw-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

    </header>
  );
};

export default Navbar;