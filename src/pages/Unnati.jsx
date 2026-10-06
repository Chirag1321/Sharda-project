import React from "react";
import Navbar from "../components/Navbar";

import suUnnati from "../assets/suUnnati.jpg";
import Suenvironment from "../assets/Suenvironment.jpg";

function Unnati() {
  return (
    <>
      <Navbar />

      <main className="program-page">

        {/* ==============================
            UNNATI Hero
        ============================== */}
        <section className="program-hero">

          <div className="program-hero-inner">

            {/* Left Content */}
            <div className="program-hero-content">

              <p className="program-eyebrow">
                SHARDA WELFARE • ENVIRONMENT
              </p>

              <h1>
                UNNATI
              </h1>

              <h2>
                Creating a Cleaner and
                <br />
                Sustainable Future
              </h2>

              <p className="program-hero-description">
                Supporting environmental awareness, cleanliness and
                sustainable practices for healthier communities.
              </p>

              <a
                href="#unnati-focus"
                className="program-hero-button"
              >
                Explore UNNATI
                <span>↓</span>
              </a>

              <div className="program-hero-tags">
                <span>Environmental Awareness</span>
                <span>Cleanliness</span>
                <span>Sustainable Communities</span>
              </div>

            </div>

            {/* Right Image */}
            <div className="program-hero-image">

              <img
                src={suUnnati}
                alt="UNNATI Environmental Initiative"
              />

              <div className="program-hero-image-label">
                <span>UNNATI</span>
                <small>Environmental Initiative</small>
              </div>

            </div>

          </div>

        </section>


        {/* ==============================
            About UNNATI
        ============================== */}
        <section className="program-intro">

          {/* Left Image */}
          <div className="program-intro-image">

            <img
              src={Suenvironment}
              alt="UNNATI Environmental Initiative"
              className="program-main-image"
            />

          </div>


          {/* Right Content */}
          <div className="program-intro-content">

            <p className="program-label">
              ABOUT UNNATI
            </p>

            <h2>
              Creating a Cleaner and
              <br />
              Sustainable Future
            </h2>

            <p>
              UNNATI is Sharda Welfare's environmental initiative focused on
              promoting environmental awareness, cleanliness and sustainable
              practices within communities.
            </p>

            <p>
              The initiative encourages communities to become more aware of
              their environment and supports activities that contribute to a
              cleaner and healthier surrounding.
            </p>


            {/* About Highlights */}
            <div className="program-about-highlights">

              {/* Highlight 1 */}
              <div className="program-about-highlight">

                <span>01</span>

                <div>
                  <h4>
                    Environmental Awareness
                  </h4>

                  <p>
                    Promoting awareness about environmental responsibility
                    and sustainable practices.
                  </p>
                </div>

              </div>


              {/* Highlight 2 */}
              <div className="program-about-highlight">

                <span>02</span>

                <div>
                  <h4>
                    Cleanliness
                  </h4>

                  <p>
                    Supporting cleanliness-focused activities for healthier
                    and cleaner communities.
                  </p>
                </div>

              </div>


              {/* Highlight 3 */}
              <div className="program-about-highlight">

                <span>03</span>

                <div>
                  <h4>
                    Sustainable Communities
                  </h4>

                  <p>
                    Encouraging responsible practices that contribute to a
                    cleaner and more sustainable future.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>
{/* ==============================
    Focus Areas
============================== */}
<section className="program-focus" id="unnati-focus">

  <div className="program-section-heading">

    <p className="program-label">
      OUR FOCUS
    </p>

    <h2>
      How UNNATI Creates Impact
    </h2>

    <p>
      Our environmental efforts focus on awareness, cleanliness and
      building more sustainable communities.
    </p>

  </div>


  <div className="program-focus-grid">

    {/* Card 1 */}
    <div className="program-focus-card">

      <div className="program-card-top">

        <div className="program-card-icon">
          🌱
        </div>

        <div className="program-card-number">
          01
        </div>

      </div>

      <h3>
        Environmental Awareness
      </h3>

      <p>
        Promoting awareness about environmental responsibility and
        encouraging sustainable practices.
      </p>

    </div>


    {/* Card 2 */}
    <div className="program-focus-card">

      <div className="program-card-top">

        <div className="program-card-icon">
          🧹
        </div>

        <div className="program-card-number">
          02
        </div>

      </div>

      <h3>
        Cleanliness
      </h3>

      <p>
        Supporting cleanliness-focused activities for healthier and
        cleaner communities.
      </p>

    </div>


    {/* Card 3 */}
    <div className="program-focus-card">

      <div className="program-card-top">

        <div className="program-card-icon">
          ♻️
        </div>

        <div className="program-card-number">
          03
        </div>

      </div>

      <h3>
        Sustainable Communities
      </h3>

      <p>
        Encouraging responsible practices that contribute to a cleaner
        and more sustainable future.
      </p>

    </div>

  </div>

</section>
{/* ==============================
    Closing CTA
============================== */}
<section className="program-cta">

  <div>

    <p className="program-label">
      ENVIRONMENT &amp; SUSTAINABILITY
    </p>

    <h2>
      Together, We Can Build
      a Cleaner Future.
    </h2>

    <p>
      Every responsible action can contribute to healthier communities
      and a more sustainable future.
    </p>

  </div>

  <a
    href="/#contact"
    className="program-cta-button"
  >
    Get Involved
    <span>→</span>
  </a>

</section>

      </main>
    </>
  );
}

export default Unnati;