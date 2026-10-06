import React from "react";
import Navbar from "../components/Navbar";
import suSehat from "../assets/suSehat.jpg";
import health from "../assets/healthicon.webp";
import Suhealth from "../assets/Suhealth.webp";

function Sehat() {
  return (
    <>
      <Navbar />

      <main className="program-page">

        {/* ==============================
            SEHAT Hero
        ============================== */}
        <section className="program-hero">

          <div className="program-hero-inner">

            {/* Left Content */}
            <div className="program-hero-content">

              <p className="program-eyebrow">
                SHARDA WELFARE • HEALTHCARE
              </p>

              <h1>SEHAT</h1>

              <h2>
                Healthcare for a
                <br />
                Healthier Community
              </h2>

              <p className="program-hero-description">
                Supporting better healthcare access, awareness and well-being
                through meaningful community initiatives.
              </p>

              <a href="#sehat-focus" className="program-hero-button">
                Explore SEHAT
                <span>↓</span>
              </a>

              <div className="program-hero-tags">
                <span>Healthcare</span>
                <span>Health Awareness</span>
                <span>Community Outreach</span>
              </div>

            </div>


            {/* Right Image */}
            <div className="program-hero-image">

              <img
                src={suSehat}
                alt="SEHAT Healthcare Initiative"
              />

              <div className="program-hero-image-label">
                <span>SEHAT</span>
                <small>Healthcare Initiative</small>
              </div>

            </div>

          </div>

        </section>


        {/* ==============================
            About SEHAT
        ============================== */}
        <section className="program-intro">

          {/* Left Image */}
          <div className="program-intro-image">

            <img
              src={Suhealth}
              alt="SEHAT Healthcare Initiative"
              className="program-main-image"
            />

          </div>


          {/* Right Content */}
          <div className="program-intro-content">

            <p className="program-label">
              ABOUT SEHAT
            </p>

            <h2>
              Better Healthcare,
              <br />
              Stronger Communities
            </h2>

            <p>
              SEHAT is Sharda Welfare's healthcare initiative focused on
              improving access to healthcare and supporting the health and
              well-being of communities.
            </p>

            <p>
              Through healthcare initiatives and community health activities,
              the program works towards creating greater awareness and
              improving access to essential healthcare services.
            </p>


            {/* About Highlights */}
            <div className="program-about-highlights">

              {/* Highlight 1 */}
              <div className="program-about-highlight">

                <span>01</span>

                <div>
                  <h4>Healthcare Access</h4>

                  <p>
                    Supporting access to essential healthcare services.
                  </p>
                </div>

              </div>


              {/* Highlight 2 */}
              <div className="program-about-highlight">

                <span>02</span>

                <div>
                  <h4>Health Awareness</h4>

                  <p>
                    Encouraging greater awareness about health and
                    well-being.
                  </p>
                </div>

              </div>


              {/* Highlight 3 */}
              <div className="program-about-highlight">

                <span>03</span>

                <div>
                  <h4>Community Outreach</h4>

                  <p>
                    Connecting healthcare initiatives with communities.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ==============================
            Focus Areas
        ============================== */}
        <section className="program-focus" id="sehat-focus">

          <div className="program-section-heading">

            <p className="program-label">
              OUR FOCUS
            </p>

            <h2>
              How SEHAT Creates Impact
            </h2>

            <p>
              Our healthcare efforts focus on meaningful support,
              awareness and community outreach.
            </p>

          </div>


          <div className="program-focus-grid">

            {/* Card 1 */}
            <div className="program-focus-card">

              <div className="program-card-top">

                <div className="program-card-icon">
                  <img
                    src={health}
                    alt="Healthcare"
                  />
                </div>

                <div className="program-card-number">
                  01
                </div>

              </div>

              <h3>
                Healthcare Access
              </h3>

              <p>
                Supporting communities with access to healthcare services
                and health-related initiatives.
              </p>

            </div>


            {/* Card 2 */}
            <div className="program-focus-card">

              <div className="program-card-top">

                <div className="program-card-icon">
                  <img
                    src={health}
                    alt="Health Awareness"
                  />
                </div>

                <div className="program-card-number">
                  02
                </div>

              </div>

              <h3>
                Health Awareness
              </h3>

              <p>
                Promoting awareness about health and well-being through
                community-focused activities.
              </p>

            </div>


            {/* Card 3 */}
            <div className="program-focus-card">

              <div className="program-card-top">

                <div className="program-card-icon">
                  <img
                    src={health}
                    alt="Community Outreach"
                  />
                </div>

                <div className="program-card-number">
                  03
                </div>

              </div>

              <h3>
                Community Outreach
              </h3>

              <p>
                Reaching communities through healthcare camps and welfare
                initiatives.
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
              HEALTH &amp; WELL-BEING
            </p>

            <h2>
              Together, We Can Build
              Healthier Communities.
            </h2>

            <p>
              Every meaningful initiative begins with a commitment to
              creating positive change.
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

export default Sehat;