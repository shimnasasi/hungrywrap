import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css";

const CTA = () => {
  return (
    <section className="hw-cta">

      <div className="hw-cta-content">

        <h2>
          Craving something delicious?
        </h2>

        <p>
          Order your favorite wrap now and satisfy your hunger!
        </p>

      </div>

      <Link to="/order" className="hw-cta-button">
        Order Now 🛍
      </Link>

      <div className="hw-cta-character">
        🐥
      </div>

    </section>
  );
};

export default CTA;