import React from "react";
import "./ContactMap.css";

const ContactMap = () => {
  return (
    <section className="contact-map-section">

      <div className="contact-map-container">

        <iframe
          title="The Hungry Wrap Location"
          src="https://www.google.com/maps?q=Bangalore,India&output=embed"
          loading="lazy"
          allowFullScreen
        ></iframe>


        <div className="map-card">

          <div className="map-pin">
            📍
          </div>

          <h2>Find Us Here</h2>

          <p>
            123, Food Street,
            <br />
            Bangalore, India
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Bangalore,India"
            target="_blank"
            rel="noreferrer"
          >
            Get Directions ↗
          </a>

        </div>

      </div>

    </section>
  );
};

export default ContactMap;