import React from "react";
import "./ContactBanner.css";

// Local Image
import chayaImage from "../Images/chaya.jpg";

const ContactBanner = () => {
  return (
    <section className="contact-banner">

      {/* Decorative Dots */}
      <div className="contact-dots dots-left"></div>

      <div className="contact-banner-container">

        {/* =========================
            LEFT CONTENT
        ========================= */}
        <div className="contact-banner-content">

          <div className="contact-small-title">
            GET IN TOUCH
            <span>↗</span>
          </div>

          <h1>
            <span>Contact</span> Us
          </h1>

          <h3>
            We’d love to hear from you!
          </h3>

          <p>
            Whether you have a question, feedback, or
            <br />
            just want to say hello – we’re here for you.
          </p>

        </div>


        {/* =========================
            RIGHT IMAGE
        ========================= */}
        <div className="contact-banner-image">

          {/* Soft Orange Gradient Shape */}
          <div className="contact-orange-shape"></div>


          {/* Food Image Card */}
          <div className="contact-image-card">

            <img
              src={chayaImage}
              alt="The Hungry Wrap food and chaya"
            />

          </div>


          {/* Yummy Bubble */}
          <div className="contact-yummy">
            Yummy!
            <span>♡</span>
          </div>


          {/* Decorative Hearts */}
          <span className="contact-heart contact-heart-one">
            ♡
          </span>

          <span className="contact-heart contact-heart-two">
            ♡
          </span>


          {/* Decorative Sparkles */}
          <span className="contact-spark contact-spark-one">
            ✦
          </span>

          <span className="contact-spark contact-spark-two">
            ✦
          </span>

        </div>

      </div>

    </section>
  );
};

export default ContactBanner;