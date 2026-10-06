import React from "react";
import Navbar from "../components/Navbar";
import HeroSu from "../assets/HeroSu.jpg";
import Suwelfare2 from "../assets/Suwelfare2.jpg";

function About() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* =========================
            ABOUT HERO
        ========================= */}
        <section className="about-hero">

          <div className="about-hero-content">

            <p className="about-eyebrow">
              SHARDA WELFARE FOUNDATION
            </p>

            <h1>
              Creating Opportunities.
              <br />
              Building Stronger Communities.
            </h1>

            <p className="about-hero-description">
              Sharda Welfare Foundation is the philanthropic arm of
              Sharda University, working towards inclusive development
              through healthcare, education, skill development and
              environmental initiatives.
            </p>

            <a href="#about-intro" className="about-hero-button">
              Discover Our Work
              <span>↓</span>
            </a>

          </div>


          {/* Image Placeholder */}
          <div className="about-hero-image">

  <img
    src={HeroSu}
    alt="P.K. Gupta - Sharda University"
  />

</div>

        </section>


        {/* =========================
            WHO WE ARE
        ========================= */}
        <section className="about-intro" id="about-intro">

          {/* Image */}
          <div className="about-intro-image">

  <img
    src={Suwelfare2}
    alt="Sharda Welfare Initiative"
  />
          </div>


          {/* Content */}
          <div className="about-intro-content">

            <p className="about-label">
              WHO WE ARE
            </p>

            <h2>
              Working Towards a More
              <br />
              Inclusive Future
            </h2>

            <p>
              Sharda Welfare Foundation is the philanthropic arm of
              Sharda University. The foundation works towards creating
              positive and meaningful change in communities through
              focused social welfare initiatives.
            </p>

            <p>
              With a special emphasis on the well-being and empowerment
              of women and children, the foundation works across areas
              that contribute to social, economic and environmental
              development.
            </p>

            <div className="about-intro-highlight">

              <span>01</span>

              <div>
                <h4>Community-Centred Development</h4>

                <p>
                  Supporting communities through meaningful initiatives
                  focused on health, education, skills and sustainable
                  development.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            OUR AREAS OF WORK
        ========================= */}
        <section className="about-work">

          <div className="about-section-heading">

            <p className="about-label">
              OUR AREAS OF WORK
            </p>

            <h2>
              Creating Impact Across
              <br />
              Communities
            </h2>

            <p>
              Sharda Welfare Foundation works across multiple areas
              that contribute to healthier, more empowered and
              sustainable communities.
            </p>

          </div>


          <div className="about-work-grid">

            {/* Healthcare */}
            <div className="about-work-card">

              <div className="about-work-number">
                01
              </div>

              <div className="about-work-icon">
                +
              </div>

              <h3>
                Healthcare
              </h3>

              <p>
                Supporting better healthcare access, awareness and
                community health initiatives.
              </p>

            </div>


            {/* Education */}
            <div className="about-work-card">

              <div className="about-work-number">
                02
              </div>

              <div className="about-work-icon">
                +
              </div>

              <h3>
                Education
              </h3>

              <p>
                Promoting education and learning opportunities for
                children and communities.
              </p>

            </div>


            {/* Skill Development */}
            <div className="about-work-card">

              <div className="about-work-number">
                03
              </div>

              <div className="about-work-icon">
                +
              </div>

              <h3>
                Skill Development
              </h3>

              <p>
                Supporting skill development and creating opportunities
                for young people to grow.
              </p>

            </div>


            {/* Environment */}
            <div className="about-work-card">

              <div className="about-work-number">
                04
              </div>

              <div className="about-work-icon">
                +
              </div>

              <h3>
                Environment
              </h3>

              <p>
                Encouraging environmental awareness, cleanliness and
                sustainable practices.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            OUR APPROACH
        ========================= */}
        <section className="about-approach">

          <div className="about-approach-content">

            <p className="about-label">
              OUR APPROACH
            </p>

            <h2>
              Building Change Through
              <br />
              Meaningful Action
            </h2>

            <p>
              The foundation believes that sustainable social change
              requires meaningful engagement with communities and
              long-term efforts that address their essential needs.
            </p>

            <p>
              Through outreach initiatives and community-focused
              programs, Sharda Welfare Foundation works towards
              improving access to healthcare and education, developing
              skills and promoting awareness about a cleaner and more
              sustainable environment.
            </p>

          </div>


          <div className="about-approach-points">

            <div className="about-approach-point">

              <span>01</span>

              <div>
                <h4>Community Focus</h4>

                <p>
                  Understanding community needs and developing
                  meaningful initiatives around them.
                </p>
              </div>

            </div>


            <div className="about-approach-point">

              <span>02</span>

              <div>
                <h4>Inclusive Development</h4>

                <p>
                  Working towards greater access to opportunities
                  and essential services.
                </p>
              </div>

            </div>


            <div className="about-approach-point">

              <span>03</span>

              <div>
                <h4>Sustainable Change</h4>

                <p>
                  Supporting initiatives that can contribute to
                  long-term community well-being.
                </p>
              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CTA
        ========================= */}
        <section className="about-cta">

          <div>

            <p className="about-label">
              GET INVOLVED
            </p>

            <h2>
              Be Part of the Change.
            </h2>

            <p>
              Together, we can contribute towards healthier,
              empowered and more inclusive communities.
            </p>

          </div>

          <a href="/#contact" className="about-cta-button">
            Get Involved
            <span>→</span>
          </a>

        </section>

      </main>
    </>
  );
}

export default About;