import React from "react";
import Navbar from "../components/Navbar";

import suCommunityhealthcamp3 from "../assets/suCommunityhealthcamp3.jpg";
import suCommunityhealthcamp2 from "../assets/suCommunityhealthcamp2.jpg";

function CommunityHealthCamps() {
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
              Community
              <br />
              Health Camps
            </h1>

            <p className="project-hero-text">
              Bringing essential healthcare, health awareness and
              medical support closer to communities that need it.
            </p>

            <a
              href="#project-overview"
              className="project-hero-btn"
            >
              Explore the Initiative
              <span>↓</span>
            </a>

          </div>


         <div className="project-hero-image">
  <img
    src={suCommunityhealthcamp3}
    alt="Community Health Camps"
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
    src={suCommunityhealthcamp2}
    alt="Community Health Camp"
  />
</div>


          <div className="project-overview-content">

            <p className="project-label">
              PROJECT OVERVIEW
            </p>

            <h2>
              Healthcare Within
              <br />
              the Community
            </h2>

            <p>
              Community health camps are an important part of
              Sharda Welfare Foundation's efforts to bring healthcare
              support and awareness closer to people in underserved
              communities.
            </p>

            <p>
              Through these camps, medical teams conduct health
              check-ups, provide guidance on health and well-being,
              and support people with appropriate medical advice
              and medicines.
            </p>

          </div>

        </section>


        {/* =========================
            COMMUNITY APPROACH
        ========================= */}
        <section className="project-highlights">

          <div className="project-section-heading">

            <p className="project-label">
              COMMUNITY APPROACH
            </p>

            <h2>
              Health Support Where
              <br />
              Communities Need It
            </h2>

            <p>
              The foundation's community health activities combine
              medical support with awareness, helping people better
              understand their health and encouraging timely care.
            </p>

          </div>


          <div className="project-highlights-grid">

            <div className="project-highlight-card">

              <span className="project-highlight-number">
                01
              </span>

              <h3>
                Health Check-ups
              </h3>

              <p>
                Medical teams conduct general health check-ups and
                help identify health concerns requiring attention.
              </p>

            </div>


            <div className="project-highlight-card">

              <span className="project-highlight-number">
                02
              </span>

              <h3>
                Medical Support
              </h3>

              <p>
                Patients may receive medical advice and medicines
                as part of the health camp activities.
              </p>

            </div>


            <div className="project-highlight-card">

              <span className="project-highlight-number">
                03
              </span>

              <h3>
                Health Awareness
              </h3>

              <p>
                Communities are encouraged to understand health
                risks, prevention and the importance of timely care.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            COMMUNITY EXAMPLES
        ========================= */}
        <section className="project-focus">

          <div className="project-focus-content">

            <p className="project-label">
              COMMUNITY OUTREACH
            </p>

            <h2>
              Reaching Communities
              <br />
              Across Greater Noida
            </h2>

            <p>
              Sharda Welfare Foundation has organised health camps
              in different communities, addressing local healthcare
              needs through medical check-ups, awareness and support.
            </p>

            <p>
              These initiatives have included health camps in villages
              and community settings, bringing healthcare professionals
              closer to people who may otherwise have limited access
              to medical support.
            </p>

          </div>


          <div className="project-focus-points">

            <div className="project-focus-point">

              <span>01</span>

              <div>

                <h3>
                  Village Haldoni
                </h3>

                <p>
                  A general health check-up and awareness drive was
                  organised in December 2021, with doctors examining
                  patients and prescribing free medicines.
                </p>

              </div>

            </div>


            <div className="project-focus-point">

              <span>02</span>

              <div>

                <h3>
                  Village Sirsa
                </h3>

                <p>
                  A free health check-up camp focused on general
                  health concerns including blood pressure, diabetes
                  and stomach-related conditions.
                </p>

              </div>

            </div>


            <div className="project-focus-point">

              <span>03</span>

              <div>

                <h3>
                  Village Bishara
                </h3>

                <p>
                  A health and nutrition camp included health
                  check-ups, haemoglobin testing and awareness
                  around nutrition and anaemia.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            IMPACT / APPROACH
        ========================= */}
        <section className="project-outcome">

          <div className="project-outcome-content">

            <p className="project-label">
              BEYOND THE CHECK-UP
            </p>

            <h2>
              Building Health
              <br />
              Awareness
            </h2>

            <p>
              Community health camps are not limited to medical
              check-ups. They also create opportunities for people
              to understand health risks, adopt healthier practices
              and seek appropriate care when required.
            </p>

          </div>


          <div className="project-outcome-stat">

            <span>01</span>

            <h3>
              Health Support
              <br />
              Meets Awareness
            </h3>

            <p>
              From medical screening and medicines to guidance on
              nutrition, prevention and follow-up care, the camps
              combine immediate support with health awareness.
            </p>

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
              Bringing Care
              <br />
              Closer to Communities.
            </h2>

            <p>
              Meaningful healthcare begins by reaching people where
              support and awareness are needed most.
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

export default CommunityHealthCamps;