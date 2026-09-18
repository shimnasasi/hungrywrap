import React from "react";
import { Link } from "react-router-dom";
import "./AboutBanner.css";

const AboutBanner = () => {
  return (
    <section className="about-banner">

      {/* Decorative dots */}
      <div className="about-dots"></div>

      <div className="about-banner-container">

        {/* LEFT CONTENT */}
        <div className="about-banner-content">

          <span className="section-label">
            ABOUT US <span>←</span>
          </span>

          <h1>
            More than just
            <br />
            <span>a wrap,</span>
            <br />
            <span>it's a feeling!</span>
          </h1>

          <p>
            At The Hungry Wrap, we believe that great food
            brings people together. Every wrap we serve is
            made with love, fresh ingredients, and a passion
            for creating smiles.
          </p>

          <Link to="/menu" className="orange-btn">
            Explore Our Menu
            <span>▣</span>
          </Link>

        </div>

        {/* RIGHT IMAGE */}
        <div className="about-banner-image">

          <div className="about-cream-blob"></div>

          <img
            className="about-food-img"
            src="https://t4.ftcdn.net/jpg/13/97/17/81/360_F_1397178106_FxbE7C5rAbAt9zaq5HXKIfhn0Ey0zvqe.jpg"
            alt="Delicious wrap"
          />

          <div className="yummy-bubble">
            Yummy! <span>♡</span>
          </div>

          <div className="about-heart heart-one">
            ♡
          </div>

          <div className="about-heart heart-two">
            ♡
          </div>

          <div className="about-lines">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="about-curve">
            ⌒
          </div>

        </div>

      </div>

      <div className="about-bottom-shape"></div>

    </section>
  );
};

export default AboutBanner;