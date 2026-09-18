import React from "react";
import "./ContactForm.css";

const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! Your message has been sent.");
  };

  return (
    <section className="contact-form-section">

      <div className="contact-form-container">

        {/* LEFT CONTACT INFORMATION */}

        <div className="contact-info">

          <h2>
            Let’s Connect <span>↗</span>
          </h2>

          <p className="contact-info-intro">
            We are always happy to serve you better.
          </p>


          <div className="contact-info-item">
            <div className="contact-icon">
              ☎
            </div>

            <div>
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>


          <div className="contact-info-item">
            <div className="contact-icon">
              ✉
            </div>

            <div>
              <h4>Email</h4>
              <p>hello@thehungrywrap.com</p>
            </div>
          </div>


          <div className="contact-info-item">
            <div className="contact-icon">
              📍
            </div>

            <div>
              <h4>Address</h4>
              <p>
                123, Food Street,
                <br />
                Bangalore, India
              </p>
            </div>
          </div>


          <div className="contact-social">
            <h4>Follow Us</h4>

            <div className="social-icons">
              <a href="#">f</a>
              <a href="#">◎</a>
              <a href="#">◉</a>
            </div>
          </div>

        </div>


        {/* FORM */}

        <div className="contact-form-box">

          <h2>
            Send Us a Message <span>↗</span>
          </h2>

          <p>
            Fill out the form below and we'll get back to you as soon as possible.
          </p>


          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="input-group">
                <span>♟</span>

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                />
              </div>


              <div className="input-group">
                <span>✉</span>

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                />
              </div>

            </div>


            <div className="input-group">
              <span>☎</span>

              <input
                type="tel"
                placeholder="Phone Number"
              />
            </div>


            <div className="input-group">
              <span>◇</span>

              <input
                type="text"
                placeholder="Subject"
              />
            </div>


            <div className="input-group textarea-group">
              <span>✎</span>

              <textarea
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>


            <button type="submit">
              Send Message <span>➤</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactForm;