import React from "react";
import "./WhyChooseUs.css";

import whyImage from "../Images/why.jpg";

const features = [
  {
    icon: "🌿",
    title: "Fresh Ingredients",
    text: "We use only the freshest and highest quality ingredients.",
  },
  {
    icon: "👨‍🍳",
    title: "Made to Order",
    text: "Every wrap is freshly made just for you.",
  },
  {
    icon: "🔥",
    title: "Bold Flavors",
    text: "A perfect blend of spices and flavors in every bite.",
  },
  {
    icon: "♡",
    title: "Made with Love",
    text: "Every wrap is crafted with passion and care.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* IMAGE */}
        <div className="why-character">

          <div className="why-image-shape"></div>

          <img
            src={whyImage}
            alt="Why choose The Hungry Wrap"
          />

          <span className="why-heart why-heart-one">
            ♡
          </span>

          <span className="why-heart why-heart-two">
            ♡
          </span>

        </div>


        {/* CONTENT */}
        <div className="why-content">

          {/* TITLE */}
          <div className="why-title">

            <span>↘</span>

            <h2>WHY CHOOSE US?</h2>

            <span>↙</span>

          </div>


          {/* FEATURES */}
          <div className="why-features">

            {features.map((feature, index) => (

              <div
                className="why-feature"
                key={index}
              >

                <div className="why-icon">
                  {feature.icon}
                </div>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;