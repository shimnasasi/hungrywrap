import React from "react";
import "./SpecialCards.css";

/* IMPORTANT — LOCAL IMAGE IMPORTS */
import rollsImage from "../Images/rolls.jpg";
import momosImage from "../Images/momos.jpg";
import chayaImage from "../Images/chaya.jpg";

const specials = [
  {
    name: "Chicken Roll",
    image: rollsImage,
    icon: "🌯",
    description:
      "Juicy chicken, fresh veggies & our special sauce wrapped to perfection.",
    price: "₹120",
  },

  {
    name: "Momos",
    image: momosImage,
    icon: "🥟",
    description:
      "Soft and delicious momos packed with bold flavors and served fresh.",
    price: "₹110",
  },

  {
    name: "Chaya",
    image: chayaImage,
    icon: "☕",
    description:
      "A warm and refreshing cup of chaya, perfect with your favorite snacks.",
    price: "₹40",
  },
];

const SpecialCards = () => {
  return (
    <section className="special-cards-section">

      <div className="special-cards-container">

        {specials.map((item, index) => (
          <div
            className="special-card"
            key={index}
          >

            {/* IMAGE */}
            <div className="special-card-image">

              <img
                src={item.image}
                alt={item.name}
              />

              <div className="special-image-overlay"></div>

              <div className="special-card-icon">
                {item.icon}
              </div>

            </div>


            {/* CONTENT */}
            <div className="special-card-content">

              <h3>{item.name}</h3>

              <p>
                {item.description}
              </p>

              <div className="special-price">
                {item.price}
              </div>

              <button className="special-order-btn">
                Order Now
                <span>▣</span>
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default SpecialCards;