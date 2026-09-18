import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="hw-banner">

      {/* Decorative dots */}
      <div className="hw-dots hw-dots-left"></div>

      <div className="hw-banner-container">

        {/* ================= LEFT CONTENT ================= */}
        <div className="hw-banner-content">

          <div className="hw-welcome">
            WELCOME TO
            <span>←</span>
          </div>

          <h1>
            The Hungry
            <br />
            <span>Wrap</span>
          </h1>

          <h3>
            Deliciously wrapped. Perfectly yours.
          </h3>

          <p>
            Fresh ingredients, bold flavors, and wraps
            made to satisfy your cravings!
          </p>

          <div className="hw-banner-buttons">

            <Link to="/order" className="hw-primary-btn">
              Order Now 🛍
            </Link>

            <Link to="/menu" className="hw-secondary-btn">
              View Menu 📋
            </Link>

          </div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <div className="hw-banner-image">

          <div className="hw-orange-shape"></div>

          <img
            src="https://png.pngtree.com/png-clipart/20250125/original/pngtree-fresh-veggie-spring-rolls-png-image_20337670.png"
            alt="Delicious chicken wraps"
          />

          <div className="hw-yummy">
            Yummy! ♡
          </div>

        </div>

      </div>

      {/* ================= CHARACTER BANNER ================= */}
      <div className="hw-character-banner">

        <div className="hw-character">
          🐥
        </div>

        <div className="hw-character-content">

          <h2>
            তাই দেরি কেন,
            <br />
            Roll করো, পেট ভরে খাও!
          </h2>

          <p>
            Roll it. Love it. Eat it. Repeat!
          </p>

        </div>

      </div>

    </section>
  );
};

export default Banner;