import React from "react";
import Navbar from "../components/Navbar";
import suSambhavna from "../assets/suSambhavna.webp";
import Suskill from "../assets/Suskill.jpg";

function Sambhavana() {
  return (
    <>
      <Navbar />

      <main className="program-page">

        {/* ==============================
            SAMBHAVANA HERO
        ============================== */}

        <section className="program-hero">

          <div className="program-hero-inner">

            {/* Left Content */}
            <div className="program-hero-content">

              <p className="program-eyebrow">
                SHARDA WELFARE • SKILL DEVELOPMENT
              </p>

              <h1>SAMBHAVANA</h1>

              <h2>
                Building Skills,
                <br />
                Creating Opportunities
              </h2>

              <p className="program-hero-description">
                Supporting individuals through skill development, learning
                opportunities and pathways towards a better future.
              </p>

              <a
                href="#sambhavana-about"
                className="program-hero-button"
              >
                Explore SAMBHAVANA
                <span>↓</span>
              </a>

              <div className="program-hero-tags">
                <span>Skill Development</span>
                <span>Learning Opportunities</span>
                <span>Future Growth</span>
              </div>

            </div>


            {/* Right Image */}
            <div className="program-hero-image">

              <img
                src={suSambhavna}
                alt="SAMBHAVANA Skill Development Initiative"
              />

              <div className="program-hero-image-label">
                <span>SAMBHAVANA</span>
                <small>Skill Development Initiative</small>
              </div>

            </div>

          </div>

        </section>


        {/* ==============================
            ABOUT SAMBHAVANA
        ============================== */}

        <section
          className="program-intro"
          id="sambhavana-about"
        >

          {/* Left Image */}
          <div className="program-intro-image">

            <img
              src={Suskill}
              alt="SAMBHAVANA Skill Development Initiative"
              className="program-main-image"
            />

          </div>


          {/* Right Content */}
          <div className="program-intro-content">

            <p className="program-label">
              ABOUT SAMBHAVANA
            </p>

            <h2>
              Building Skills,
              <br />
              Creating Opportunities
            </h2>

            <p>
              SAMBHAVANA is Sharda Welfare's skill development initiative
              focused on creating opportunities for individuals to develop
              practical skills and improve their future prospects.
            </p>

            <p>
              The initiative aims to encourage skill development and support
              individuals in becoming more confident, capable and prepared
              for opportunities.
            </p>


            {/* About Highlights */}
            <div className="program-about-highlights">

              {/* Highlight 1 */}
              <div className="program-about-highlight">

                <span>01</span>

                <div>

                  <h4>
                    Skill Development
                  </h4>

                  <p>
                    Supporting individuals in developing useful and practical
                    skills.
                  </p>

                </div>

              </div>


              {/* Highlight 2 */}
              <div className="program-about-highlight">

                <span>02</span>

                <div>

                  <h4>
                    Learning Opportunities
                  </h4>

                  <p>
                    Encouraging continuous learning and personal development.
                  </p>

                </div>

              </div>


              {/* Highlight 3 */}
              <div className="program-about-highlight">

                <span>03</span>

                <div>

                  <h4>
                    Better Opportunities
                  </h4>

                  <p>
                    Helping individuals build skills that can support their
                    future growth.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>
{/* ==============================
    Focus Areas
============================== */}
<section className="program-focus">

  <div className="program-section-heading">

    <p className="program-label">
      OUR FOCUS
    </p>

    <h2>
      How SAMBHAVANA Creates Impact
    </h2>

    <p>
      Our skill development efforts focus on building capabilities,
      encouraging learning and creating better opportunities.
    </p>

  </div>

  <div className="program-focus-grid">

    {/* Card 1 */}
    <div className="program-focus-card">

      <div className="program-card-top">

        <div className="program-card-icon">
          💡
        </div>

        <div className="program-card-number">
          01
        </div>

      </div>

      <h3>
        Skill Development
      </h3>

      <p>
        Supporting individuals in developing useful and practical skills
        for their personal and professional growth.
      </p>

    </div>

    {/* Card 2 */}
    <div className="program-focus-card">

      <div className="program-card-top">

        <div className="program-card-icon">
          🎓
        </div>

        <div className="program-card-number">
          02
        </div>

      </div>

      <h3>
        Learning Opportunities
      </h3>

      <p>
        Encouraging continuous learning and development through
        community-focused initiatives.
      </p>

    </div>

    {/* Card 3 */}
    <div className="program-focus-card">

      <div className="program-card-top">

        <div className="program-card-icon">
          🌱
        </div>

        <div className="program-card-number">
          03
        </div>

      </div>

      <h3>
        Better Opportunities
      </h3>

      <p>
        Helping individuals build skills that can support their future
        growth and opportunities.
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
      SKILLS &amp; OPPORTUNITY
    </p>

    <h2>
      Together, We Can Build
      Better Opportunities.
    </h2>

    <p>
      Every skill creates a pathway towards greater confidence,
      growth and opportunity.
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

export default Sambhavana;