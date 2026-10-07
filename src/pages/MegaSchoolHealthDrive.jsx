import React from "react";
import Navbar from "../components/Navbar";
import suMegahealth from "../assets/suMegahealth.jpg";
import suMegahealth2 from "../assets/suMegahealth2.jpg";

function MegaSchoolHealthDrive() {
  return (
    <>
      <Navbar />

      <main className="project-page">

        {/* =========================
            HERO
        ========================= */}
        <section className="project-hero">

          <div className="project-hero-content">

            <p className="project-label">
              SHARDA WELFARE • PROJECT
            </p>

            <h1>
              Mega School
              <br />
              Health Drive
            </h1>

            <p className="project-hero-text">
              Promoting better health and early healthcare support
              for children studying in government schools.
            </p>

            <a href="#project-overview" className="project-hero-btn">
              Explore the Project
              <span>↓</span>
            </a>

          </div>

        <div className="project-hero-image">
  <img
    src={suMegahealth2}
    alt="Mega School Health Drive"
  />
</div>

        </section>


        {/* =========================
            PROJECT OVERVIEW
        ========================= */}
        <section
          className="project-overview"
          id="project-overview"
        >

    <div className="project-overview-image">
  <img
    src={suMegahealth}
    alt="Mega School Health Drive"
  />
</div>

          <div className="project-overview-content">

            <p className="project-label">
              PROJECT OVERVIEW
            </p>

            <h2>
              Supporting the Health
              <br />
              of School Children
            </h2>

            <p>
              The Mega School Health Drive is a healthcare initiative
              focused on improving access to health screening and
              awareness for children studying in government schools
              in Greater Noida.
            </p>

            <p>
              The initiative was conducted by Sharda Welfare Foundation
              in collaboration with Noida Power Company Limited (NPCL),
              bringing healthcare professionals together to identify
              important health concerns and support early intervention.
            </p>

          </div>

        </section>


        {/* =========================
            PROJECT HIGHLIGHTS
        ========================= */}
        <section className="project-highlights">

          <div className="project-section-heading">

            <p className="project-label">
              PROJECT HIGHLIGHTS
            </p>

            <h2>
              Healthcare That Reaches
              <br />
              the Community
            </h2>

            <p>
              The campaign focused on identifying important health
              concerns among children and connecting them with
              appropriate healthcare support.
            </p>

          </div>


          <div className="project-highlights-grid">

            <div className="project-highlight-card">

              <span className="project-highlight-number">
                01
              </span>

              <h3>
                2,600+ Children
              </h3>

              <p>
                More than 2,600 government school children in
                Greater Noida were covered through the health drive.
              </p>

            </div>


            <div className="project-highlight-card">

              <span className="project-highlight-number">
                02
              </span>

              <h3>
                6 Government Schools
              </h3>

              <p>
                The campaign was conducted across six government
                schools in Greater Noida.
              </p>

            </div>


            <div className="project-highlight-card">

              <span className="project-highlight-number">
                03
              </span>

              <h3>
                Specialist Medical Teams
              </h3>

              <p>
                Medical professionals including pediatric,
                dental and eye specialists supported the campaign.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            HEALTH FOCUS
        ========================= */}
        <section className="project-focus">

          <div className="project-focus-content">

            <p className="project-label">
              HEALTH FOCUS
            </p>

<h2>
  Specialist Care for
  <br />
  School Children
</h2>

            <p>
  The health drive brought together medical specialists
  to support comprehensive health screening and identify
  healthcare needs among participating school children.
</p>

<p>
  The initiative focused on specialist areas including
  pediatrics, ophthalmology and dental care.
</p>

          </div>


          <div className="project-focus-points">

            <div className="project-focus-point">
              <span>01</span>

              <div>
               <h3>
  Pediatrics
</h3>

<p>
  Medical screening focused on children's general health
  and identifying concerns requiring further attention.
</p>
              </div>
            </div>


            <div className="project-focus-point">
              <span>02</span>

              <div>
              <h3>
  Ophthalmology
</h3>

<p>
  Eye screening helped identify eyesight-related concerns
  among participating students.
</p>
              </div>
            </div>


            <div className="project-focus-point">
              <span>03</span>

              <div>
                <h3>
  Dental Care
</h3>

<p>
  Dental screening supported early identification of
  oral health concerns.
</p>
              </div>
            </div>

          </div>

        </section>


        {/* =========================
            CTA
        ========================= */}
        <section className="project-cta">

          <div>

            <p className="project-label">
              SHARDA WELFARE FOUNDATION
            </p>

            <h2>
              Building Healthier
              <br />
              Communities Together.
            </h2>

            <p>
              Meaningful change begins by understanding community
              needs and taking action where it matters.
            </p>

          </div>

          <a
            href="/#contact"
            className="project-cta-btn"
          >
            Get Involved
            <span>→</span>
          </a>

        </section>

      </main>
    </>
  );
}

export default MegaSchoolHealthDrive;