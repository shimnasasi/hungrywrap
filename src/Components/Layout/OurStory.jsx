import React from "react";
import "./OurStory.css";

/* LOCAL IMAGES */
import rollsImage from "../Images/rolls.jpg";
import momosImage from "../Images/momos.jpg";
import chayaImage from "../Images/chaya.jpg";

const OurStory = () => {
  return (
    <section className="our-story">
      <div className="story-container">

        {/* =========================
            IMAGE COLLAGE
        ========================== */}
        <div className="story-image">

          <div className="story-image-bg"></div>

          <div className="story-collage">

            {/* MAIN ROLL IMAGE */}
            <div className="story-photo-wrap story-roll-wrap">
              <img
                src={rollsImage}
                alt="Delicious rolls"
                className="story-photo"
              />
            </div>

            {/* MOMOS IMAGE */}
            <div className="story-photo-wrap story-momos-wrap">
              <img
                src={momosImage}
                alt="Delicious momos"
                className="story-photo"
              />
            </div>

            {/* CHAYA IMAGE */}
            <div className="story-photo-wrap story-chaya-wrap">
              <img
                src={chayaImage}
                alt="Fresh chaya"
                className="story-photo"
              />
            </div>

          </div>

          {/* DECORATIONS */}
          <span className="story-heart story-heart-one">
            ♡
          </span>

          <span className="story-heart story-heart-two">
            ♡
          </span>

          <span className="story-spark story-spark-one">
            ✦
          </span>

          <span className="story-spark story-spark-two">
            ✦
          </span>

        </div>


        {/* =========================
            CONTENT
        ========================== */}
        <div className="story-content">

          <span className="story-label">
            OUR STORY
            <span>←</span>
          </span>

          <h2>
            A wrap made with{" "}
            <span>passion,</span>
            <br />

            served with{" "}
            <span>happiness.</span>
          </h2>

          <p>
            The Hungry Wrap was born out of a simple idea –
            to serve delicious, healthy, and satisfying wraps
            that fit perfectly into your busy life.
          </p>

          <p>
            From our kitchen to your hands, we promise quality,
            consistency, and a taste you'll keep coming back for.
          </p>

          <div className="story-line"></div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;