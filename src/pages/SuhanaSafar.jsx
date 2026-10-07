import React from "react";
import Navbar from "../components/Navbar";
import suSuhanasafar from "../assets/suSuhanasafar.jpg";
import suSuhanasafar2 from "../assets/suSuhanasafar2.jpg";

function SuhanaSafar() {
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
              Suhana
              <br />
              Safar
            </h1>

            <p className="project-hero-text">
              A community health campaign bringing essential
              healthcare awareness and screening closer to
              people and communities across Delhi NCR.
            </p>

            <a
              href="#project-overview"
              className="project-hero-btn"
            >
              Explore the Campaign
              <span>↓</span>
            </a>

          </div>

          <div className="project-hero-image">
  <img
    src={suSuhanasafar}
    alt="Suhana Safar Community Health Campaign"
  />
</div>

        </section>


        {/* =========================
            CAMPAIGN OVERVIEW
        ========================= */}
        <section
          className="project-overview"
          id="project-overview"
        >
<div className="project-overview-image">
  <img
    src={suSuhanasafar2}
    alt="Suhana Safar Community Health Campaign"
  />
</div>

          <div className="project-overview-content">

            <p className="project-label">
              CAMPAIGN OVERVIEW
            </p>

            <h2>
              Bringing Healthcare
              <br />
              Closer to Communities
            </h2>

            <p>
              Suhana Safar is a community health campaign focused
              on connecting with truck drivers, helpers, their
              families and local communities living near the
              Maersk container depot in the Delhi NCR region.
            </p>

            <p>
              The campaign was organised by Sharda Welfare
              Foundation in collaboration with A. P. Moller Maersk
              and Development Alternatives, with a focus on
              improving healthcare accessibility and awareness.
            </p>

          </div>

        </section>


        {/* =========================
            CAMPAIGN REACH
        ========================= */}
        <section className="project-highlights">

          <div className="project-section-heading">

            <p className="project-label">
              CAMPAIGN REACH
            </p>

            <h2>
              Taking Health Support
              <br />
              Into the Community
            </h2>

            <p>
              The launch of Suhana Safar brought healthcare
              professionals directly into the community, making
              basic screening and medical guidance more accessible.
            </p>

          </div>


          <div className="project-highlights-grid">

            <div className="project-highlight-card">

              <span className="project-highlight-number">
                01
              </span>

              <h3>
                250+ Participants
              </h3>

              <p>
                More than 250 people participated in the launch-day
                health campaign and received guidance from medical
                experts.
              </p>

            </div>


            <div className="project-highlight-card">

              <span className="project-highlight-number">
                02
              </span>

              <h3>
                Tilapta Village
              </h3>

              <p>
                The launch-day community health drive was conducted
                in Tilapta Village, Greater Noida.
              </p>

            </div>


            <div className="project-highlight-card">

              <span className="project-highlight-number">
                03
              </span>

              <h3>
                Health Screening
              </h3>

              <p>
                Specialised general health, eye and dental screening
                was conducted by the medical team.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            HEALTHCARE FOCUS
        ========================= */}
        <section className="project-focus">

          <div className="project-focus-content">

            <p className="project-label">
              HEALTHCARE FOCUS
            </p>

            <h2>
              Screening, Guidance
              <br />
              & Early Attention
            </h2>

            <p>
              The campaign combined health screening with
              professional advice, helping participants understand
              their health needs and the importance of timely care.
            </p>

            <p>
              Participants also received medicines for basic
              treatment, while those requiring further attention
              were recommended to seek treatment at the nearest
              hospital.
            </p>

          </div>


          <div className="project-focus-points">

            <div className="project-focus-point">

              <span>01</span>

              <div>

                <h3>
                  General Health
                </h3>

                <p>
                  Specialised general health screening helped
                  identify health concerns among participants.
                </p>

              </div>

            </div>


            <div className="project-focus-point">

              <span>02</span>

              <div>

                <h3>
                  Eye Screening
                </h3>

                <p>
                  Eye screening formed an important part of the
                  community health campaign.
                </p>

              </div>

            </div>


            <div className="project-focus-point">

              <span>03</span>

              <div>

                <h3>
                  Dental Screening
                </h3>

                <p>
                  Dental screening helped raise awareness about
                  oral health and identify concerns requiring attention.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CAMPAIGN OUTCOME
        ========================= */}
        <section className="project-outcome">

          <div className="project-outcome-content">

            <p className="project-label">
              CAMPAIGN OUTCOME
            </p>

            <h2>
              Turning Screening
              <br />
              Into Better Awareness
            </h2>

            <p>
              The campaign provided participants with access to
              medical advice and basic treatment support while
              encouraging them to take appropriate follow-up care.
            </p>

          </div>


          <div className="project-outcome-stat">

            <span>30%</span>

            <h3>
              Participants received
              <br />
              a diagnosis
            </h3>

            <p>
              According to the official campaign update, 30% of
              individuals were diagnosed and recommended to seek
              further treatment at the nearest hospital.
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
              Healthier Communities
              <br />
              Begin With Access.
            </h2>

            <p>
              Meaningful community outreach can help people access
              healthcare, information and support closer to where they live.
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

export default SuhanaSafar;