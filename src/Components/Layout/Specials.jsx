import React from "react";
import { Link } from "react-router-dom";
import "./Specials.css";

import rolls from "../Images/rolls.jpg";
import momos from "../Images/momos.jpg";
import chaya from "../Images/chaya.jpg";

const specials = [
  {
    name: "Chicken Roll",
    description:
      "Juicy chicken, fresh veggies & our special sauce wrapped to perfection.",
    price: "₹120",
    image: rolls,
  },
  {
    name: "Paneer Roll",
    description:
      "Soft paneer, crunchy veggies & flavorful sauce in every bite.",
    price: "₹110",
    image: momos,
  },
  {
    name: "Veggie Roll",
    description:
      "A healthy delight with fresh veggies & tangy flavors.",
    price: "₹100",
    image: chaya,
  },
];

const Specials = () => {
  return (
    <section className="hw-specials">

      {/* Decorative crosses - left */}
      <div className="hw-specials-pattern hw-specials-pattern-left">
        <span>×</span>
        <span>×</span>
        <span>×</span>
        <span>×</span>
        <span>×</span>
        <span>×</span>
        <span>×</span>
        <span>×</span>
        <span>×</span>
      </div>

      {/* Decorative crosses - right */}
      <div className="hw-specials-pattern hw-specials-pattern-right">
        <span>×</span>
        <span>×</span>
        <span>×</span>
        <span>×</span>
        <span>×</span>
        <span>×</span>
        <span>×</span>
        <span>×</span>
        <span>×</span>
      </div>

      {/* Heading */}
      <div className="hw-section-heading">

        <div className="hw-heading-decoration">
          <span>←</span>
          <strong>OUR</strong>
          <span>→</span>
        </div>

        <h2>SPECIALS</h2>

      </div>

      {/* Food cards */}
      <div className="hw-specials-container">

        {specials.map((item, index) => (
          <div className="hw-food-card" key={index}>

            <div className="hw-food-content">

              <h3>{item.name}</h3>

              <p>{item.description}</p>

              <strong>{item.price}</strong>

            </div>

            <div className="hw-food-image">
              <img
                src={item.image}
                alt={item.name}
              />
            </div>

          </div>
        ))}

      </div>

      {/* View menu */}
      <Link to="/menu" className="hw-menu-button">
        View Full Menu
        <span>↗</span>
      </Link>

    </section>
  );
};

export default Specials;