import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="hw-footer">

      <div className="hw-footer-container">

        {/* Company */}

        <div className="hw-footer-company">

          <Link to="/" className="hw-footer-logo">

            <span>🌯</span>

            <div>
              <strong>
                The Hungry Wrap
              </strong>

              <small>
                Wraps so good, you'll come back for more!
              </small>
            </div>

          </Link>

          <p>
            Wraps made with fresh ingredients,
            bold flavors, and lots of love.
          </p>

          <div className="hw-social">

            <a href="#facebook">f</a>
            <a href="#instagram">◎</a>
            <a href="#whatsapp">◉</a>

          </div>

        </div>


        {/* Quick Links */}

        <div className="hw-footer-column">

          <h4>Quick Links</h4>

          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/specials">Specials</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>

        </div>


        {/* Contact */}

        <div className="hw-footer-column">

          <h4>Contact Us</h4>

          <p>☎ +91 98765 43210</p>

          <p>✉ hello@thehungrywrap.com</p>

          <p>
            📍 123, Food Street,
            <br />
            Bangalore, India
          </p>

        </div>


        {/* Hours */}

        <div className="hw-footer-column">

          <h4>Opening Hours</h4>

          <p>Monday – Sunday</p>

          <p>11:00 AM – 11:00 PM</p>

        </div>

      </div>


      <div className="hw-footer-bottom">

        <p>
          © 2025 The Hungry Wrap. All rights reserved.
        </p>

        <span>
          Made with ❤️
        </span>

      </div>

    </footer>
  );
};

export default Footer;