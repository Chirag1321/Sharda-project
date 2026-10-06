import React from "react";
import Navbar from "../components/Navbar";
import suAward from "../assets/suAward.jpg";
import suAward2 from "../assets/suAward2.jpg";

function OurStory() {
  return (
    <>
      <Navbar />

      <main className="story-page">

        {/* =========================
            OUR STORY HERO
        ========================= */}
        <section className="story-hero">

          <div className="story-hero-content">

            <p className="story-eyebrow">
              SHARDA WELFARE • OUR STORY
            </p>

            <h1>
              A Journey of
              <br />
              Service &amp; Impact
            </h1>

            <p className="story-hero-description">
              Sharda Welfare brings together years of community-focused
              efforts through a structured approach towards welfare,
              social development and meaningful community support.
            </p>

            <a href="#story-journey" className="story-hero-button">
              Explore Our Journey
              <span>↓</span>
            </a>

          </div>


          {/* Image Placeholder */}
         <div className="story-hero-image">

  <img
    src={suAward}
    alt="Sharda Welfare"
  />

</div>

        </section>


        {/* =========================
            OUR JOURNEY
        ========================= */}
        <section className="story-journey" id="story-journey">

         <div className="story-journey-image">

  <img
    src={suAward2}
    alt="Sharda Welfare Journey"
  />

</div>


          <div className="story-journey-content">

            <p className="story-label">
              OUR JOURNEY
            </p>

            <h2>
              From Community Efforts
              <br />
              to Focused Action
            </h2>

            <p>
              Sharda Welfare has grown from the community-focused
              activities of the Sharda Group into a structured foundation
              dedicated to welfare and social development.
            </p>

            <p>
              Over the years, the Sharda Group has been involved in
              community welfare activities across areas such as
              healthcare, education and the environment. Sharda Welfare
              brings these efforts together through focused initiatives
              designed to support communities.
            </p>

            <div className="story-highlight">

              <span>01</span>

              <div>

                <h4>
                  Community-Centred Work
                </h4>

                <p>
                  Building on community welfare activities and responding
                  to the needs of the people and communities we serve.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            FROM EXPERIENCE TO ACTION
        ========================= */}
        <section className="story-evolution">

          <div className="story-section-heading">

            <p className="story-label">
              OUR EVOLUTION
            </p>

            <h2>
              Turning Experience Into
              <br />
              Meaningful Action
            </h2>

            <p>
              Our journey reflects a continued commitment to bringing
              community welfare efforts together through focused and
              meaningful initiatives.
            </p>

          </div>


          <div className="story-evolution-grid">

            <div className="story-evolution-card">

              <span>01</span>

              <h3>
                Community Focus
              </h3>

              <p>
                Working towards welfare initiatives that respond to
                community needs and create meaningful support.
              </p>

            </div>


            <div className="story-evolution-card">

              <span>02</span>

              <h3>
                Experience
              </h3>

              <p>
                Building on the Sharda Group's experience in healthcare,
                education and other areas of community welfare.
              </p>

            </div>


            <div className="story-evolution-card">

              <span>03</span>

              <h3>
                Focused Initiatives
              </h3>

              <p>
                Bringing different welfare efforts together through
                dedicated initiatives across communities.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            CONTINUING JOURNEY
        ========================= */}
        <section className="story-continuing">

          <div className="story-continuing-content">

            <p className="story-label">
              OUR CONTINUING JOURNEY
            </p>

            <h2>
              Continuing to Create
              <br />
              Meaningful Change
            </h2>

            <p>
              Sharda Welfare continues its journey by working across
              healthcare, education, skill development and environmental
              initiatives.
            </p>

            <p>
              Through these efforts, the foundation aims to contribute
              towards stronger communities and greater access to
              meaningful opportunities.
            </p>

          </div>


          <div className="story-continuing-points">

            <div className="story-point">

              <span>01</span>

              <div>
                <h4>Healthcare</h4>

                <p>
                  Supporting community health and healthcare initiatives.
                </p>
              </div>

            </div>


            <div className="story-point">

              <span>02</span>

              <div>
                <h4>Education</h4>

                <p>
                  Supporting learning and educational opportunities.
                </p>
              </div>

            </div>


            <div className="story-point">

              <span>03</span>

              <div>
                <h4>Skill Development</h4>

                <p>
                  Creating opportunities for learning and skill development.
                </p>
              </div>

            </div>


            <div className="story-point">

              <span>04</span>

              <div>
                <h4>Environment</h4>

                <p>
                  Encouraging cleaner and more sustainable communities.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CTA
        ========================= */}
        <section className="story-cta">

          <div>

            <p className="story-label">
              BE PART OF THE JOURNEY
            </p>

            <h2>
              Together, We Can Create
              <br />
              Meaningful Change.
            </h2>

            <p>
              Every meaningful initiative begins with a commitment
              to creating a positive difference.
            </p>

          </div>

          <a href="/#contact" className="story-cta-button">
            Get Involved
            <span>→</span>
          </a>

        </section>

      </main>
    </>
  );
}

export default OurStory;