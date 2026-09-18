import React from "react";
import { Leaf, ChefHat, Flame, Heart } from "lucide-react";
import "./AboutValues.css";

const values = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    text: "We use only the freshest and highest quality ingredients.",
  },
  {
    icon: ChefHat,
    title: "Made to Order",
    text: "Every wrap is prepared fresh just for you.",
  },
  {
    icon: Flame,
    title: "Bold Flavors",
    text: "A perfect blend of spices and flavors in every bite.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    text: "Every wrap is crafted with passion and care.",
  },
];

const AboutValues = () => {
  return (
    <section className="about-values">

      <div className="about-values-container">

        {/* SECTION TITLE */}
        <div className="about-values-header">

          <div className="values-heading">
            <span className="heading-arrow">↘</span>

            <h2>WHAT MAKES US SPECIAL</h2>

            <span className="heading-arrow">↙</span>
          </div>

          <div className="about-values-line"></div>

        </div>


        {/* VALUES */}
        <div className="about-values-grid">

          {values.map((value, index) => {

            const Icon = value.icon;

            return (
              <div
                className="about-value-card"
                key={index}
              >

                {/* ICON */}
                <div className="about-value-icon">
                  <Icon size={32} strokeWidth={2} />
                </div>


                {/* TITLE */}
                <h3>{value.title}</h3>


                {/* DESCRIPTION */}
                <p>{value.text}</p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
};

export default AboutValues;