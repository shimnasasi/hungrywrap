import React from "react";
import "./SpecialsBanner.css";

// Local image
import rollsImage from "../Images/rolls.jpg";

const SpecialsBanner = () => {
  return (
    <section className="specials-banner">

      {/* Decorative Dots */}
      <div className="special-dots special-dots-left"></div>


      <div className="specials-banner-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}
        <div className="specials-banner-content">

          <div className="specials-label">
            OUR SPECIALS
            <span>↗</span>
          </div>

          <h1>
            Wraps made
            <br />
            <span>to crave!</span>
          </h1>

          <p>
            From hearty rolls to wholesome options,
            <br />
            we have something delicious for everyone.
          </p>

        </div>


        {/* =========================
            RIGHT IMAGE
        ========================= */}
        <div className="specials-banner-image">

          {/* Orange Gradient Shape */}
          <div className="special-orange-shape"></div>


          {/* Food Image */}
          <div className="special-image-card">

            <img
              src={rollsImage}
              alt="Delicious Hungry Wrap rolls"
            />

          </div>


          {/* Yummy Bubble */}
          <div className="special-yummy">
            Yummy!
            <span>♡</span>
          </div>


          {/* Decorative Hearts */}
          <span className="special-heart special-heart-one">
            ♡
          </span>

          <span className="special-heart special-heart-two">
            ♡
          </span>

        </div>

      </div>


      {/* =========================
          BOTTOM SECTION TITLE
      ========================= */}
      <div className="special-title">

        <span>↘</span>

        <h2>
          WHAT WOULD YOU LIKE TODAY?
        </h2>

        <span>↙</span>

      </div>

    </section>
  );
};

export default SpecialsBanner;