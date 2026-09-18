import React from "react";
import "./WhyChoose.css";

const reasons = [
  {
    icon: "🍃",
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

const WhyChoose = () => {
  return (
    <section className="hw-why">

      <div className="hw-why-heading">

        <span>WHY CHOOSE US?</span>

        <h2>Why You'll Love Our Wraps</h2>

      </div>


      <div className="hw-why-grid">

        {reasons.map((item, index) => (

          <div className="hw-reason" key={index}>

            <div className="hw-reason-icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.text}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
};

export default WhyChoose;