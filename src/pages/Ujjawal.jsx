import React from "react";
import Navbar from "../components/Navbar";
import suUjjwal from "../assets/suUjjwal.jpg";
import Sueducation from "../assets/Sueducation.webp";

function Ujjawal() {
  return (
    <>
      <Navbar />

      <main className="program-page">

        {/* ==============================
            UJJAWAL HERO
        ============================== */}

        <section className="program-hero">

          <div className="program-hero-inner">

            {/* Left Content */}
            <div className="program-hero-content">

              <p className="program-eyebrow">
                SHARDA WELFARE • EDUCATION
              </p>

              <h1>UJJAWAL</h1>

              <h2>
                Education for a
                <br />
                Brighter Future
              </h2>

              <p className="program-hero-description">
                Supporting access to education, learning opportunities and
                brighter futures for children and communities.
              </p>

              <a
                href="#ujjawal-about"
                className="program-hero-button"
              >
                Explore UJJAWAL
                <span>↓</span>
              </a>

              <div className="program-hero-tags">
                <span>Education</span>
                <span>Learning Support</span>
                <span>Community Development</span>
              </div>

            </div>

           {/* Right Image */}
<div className="program-hero-image">

  <img
    src={suUjjwal}
    alt="UJJAWAL Education Initiative"
  />

  <div className="program-hero-image-label">
    <span>UJJAWAL</span>
    <small>Education Initiative</small>
  </div>

</div>
          </div>

        </section>


        {/* ==============================
            ABOUT UJJAWAL
        ============================== */}

        <section
          className="program-intro"
          id="ujjawal-about"
        >

        {/* Left Image */}
<div className="program-intro-image">

  <img
    src={Sueducation}
    alt="UJJAWAL Education Initiative"
    className="program-main-image"
  />

</div>


          {/* Right Content */}
          <div className="program-intro-content">

            <p className="program-label">
              ABOUT UJJAWAL
            </p>

            <h2>
              Education for a
              <br />
              Brighter Future
            </h2>

            <p>
              UJJAWAL is Sharda Welfare's education initiative focused on
              supporting access to education and creating opportunities for
              children and communities.
            </p>

            <p>
              The initiative aims to encourage learning, improve educational
              awareness and support the development of children through
              community-focused activities.
            </p>


            {/* About Highlights */}
            <div className="program-about-highlights">

              {/* Highlight 1 */}
              <div className="program-about-highlight">

                <span>01</span>

                <div>

                  <h4>
                    Access to Education
                  </h4>

                  <p>
                    Supporting educational opportunities for children and
                    communities.
                  </p>

                </div>

              </div>


              {/* Highlight 2 */}
              <div className="program-about-highlight">

                <span>02</span>

                <div>

                  <h4>
                    Learning Support
                  </h4>

                  <p>
                    Encouraging learning and educational development through
                    community initiatives.
                  </p>

                </div>

              </div>


              {/* Highlight 3 */}
              <div className="program-about-highlight">

                <span>03</span>

                <div>

                  <h4>
                    Community Development
                  </h4>

                  <p>
                    Promoting education as an important foundation for a
                    stronger and brighter future.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>
{/* ==============================
    UJJAWAL FOCUS AREAS
============================== */}

<section className="program-focus">

  <div className="program-section-heading">

    <p className="program-label">
      OUR FOCUS
    </p>

    <h2>
      How UJJAWAL Creates Impact
    </h2>

    <p>
      Our education efforts focus on creating opportunities, supporting
      learning and strengthening communities.
    </p>

  </div>


  <div className="program-focus-grid">

    {/* Card 1 */}
    <div className="program-focus-card">

      <div className="program-card-top">

        <div className="program-card-icon">
          <span>📚</span>
        </div>

        <div className="program-card-number">
          01
        </div>

      </div>

      <h3>
        Access to Education
      </h3>

      <p>
        Supporting educational opportunities and improving access to
        learning for children and communities.
      </p>

    </div>


    {/* Card 2 */}
    <div className="program-focus-card">

      <div className="program-card-top">

        <div className="program-card-icon">
          <span>🎓</span>
        </div>

        <div className="program-card-number">
          02
        </div>

      </div>

      <h3>
        Learning Support
      </h3>

      <p>
        Encouraging learning and educational development through
        community-focused initiatives.
      </p>

    </div>


    {/* Card 3 */}
    <div className="program-focus-card">

      <div className="program-card-top">

        <div className="program-card-icon">
          <span>🌱</span>
        </div>

        <div className="program-card-number">
          03
        </div>

      </div>

      <h3>
        Community Development
      </h3>

      <p>
        Promoting education as a foundation for stronger and brighter
        communities.
      </p>

    </div>

  </div>

</section>

{/* ==============================
    UJJAWAL CLOSING CTA
============================== */}

<section className="program-cta">

  <div>

    <p className="program-label">
      EDUCATION &amp; OPPORTUNITY
    </p>

    <h2>
      Together, We Can Build
      Brighter Futures.
    </h2>

    <p>
      Every child deserves the opportunity to learn, grow and create
      a better future.
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

export default Ujjawal;