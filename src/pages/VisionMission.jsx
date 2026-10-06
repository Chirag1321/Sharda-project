import React from "react";
import Navbar from "../components/Navbar";
import suVision2 from "../assets/suVision2.jpg";

function VisionMission() {
  return (
    <>
      <Navbar />

      <main className="vision-page">

        {/* =========================
            HERO
        ========================= */}
        <section className="vision-hero">

          <div className="vision-hero-content">

            <p className="vision-eyebrow">
              SHARDA WELFARE • VISION &amp; MISSION
            </p>

            <h1>
              Creating a More
              <br />
              Equitable Future
            </h1>

            <p>
              Building a society where people have equitable access to
              opportunities, essential support and the resources they need
              to realise their potential.
            </p>

            <a href="#our-vision" className="vision-hero-button">
              Explore Our Vision
              <span>↓</span>
            </a>

          </div>

          <div className="vision-hero-side">
  <div className="vision-hero-image">
    <img
      src={suVision2}
      alt="Sharda Welfare community initiative"
    />
  </div>
</div>

        </section>


        {/* =========================
            OUR VISION
        ========================= */}
        <section className="vision-section" id="our-vision">

          <div className="vision-section-label">
            <span>01</span>
            <p>OUR VISION</p>
          </div>

          <div className="vision-section-content">

            <h2>
              A society built on
              <br />
              inclusion and fairness.
            </h2>

            <div className="vision-section-text">

              <p>
                At the core of our vision is a society where equal access
                to opportunities and resources is not a privilege, but a
                fundamental right.
              </p>

              <p>
                We envision communities that flourish through inclusivity,
                fairness and shared prosperity, where every individual has
                an equitable opportunity to realise their potential.
              </p>

              <p>
                Our commitment is to help remove barriers that stand in
                the way of progress and contribute towards a more just
                and equitable society.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            OUR MISSION
        ========================= */}
       <section className="vm-mission-section">

  <div className="vm-mission-content">

    <p className="vision-label">OUR MISSION</p>

    <h2>
      Uplifting People Through
      <br />
      Meaningful Support
    </h2>

    <p>
      Our mission is to uplift those in need by addressing the
      multifaceted challenges faced by individuals and communities.
    </p>

    <p>
      Through essential services and support, we work towards
      creating positive and lasting impact in the communities
      we serve.
    </p>

  </div>


  <div className="vm-mission-side">

    <div className="vm-mission-point">

      <span>01</span>

      <div>
        <h3>Essential Support</h3>

        <p>
          Addressing important needs through meaningful welfare
          initiatives and services.
        </p>
      </div>

    </div>


    <div className="vm-mission-point">

      <span>02</span>

      <div>
        <h3>Inclusive Development</h3>

        <p>
          Working towards greater access to opportunities and
          resources for communities.
        </p>
      </div>

    </div>


    <div className="vm-mission-point">

      <span>03</span>

      <div>
        <h3>Lasting Impact</h3>

        <p>
          Supporting positive change that can contribute to
          stronger and more equitable communities.
        </p>
      </div>

    </div>

  </div>

</section>


        {/* =========================
            CORE VALUES
        ========================= */}
        <section className="values-section">

          <div className="values-heading">

            <p className="vision-label">
              OUR CORE VALUES
            </p>

            <h2>
              Principles That Guide
              <br />
              Our Work
            </h2>

            <p>
              Our work is guided by values that shape how we engage with
              communities and work towards meaningful social change.
            </p>

          </div>

          <div className="values-list">

            <div className="value-item">
              <span>01</span>
              <h3>Compassion</h3>
              <p>
                Caring about the well-being of the communities we serve
                with empathy and understanding.
              </p>
            </div>

            <div className="value-item">
              <span>02</span>
              <h3>Integrity</h3>
              <p>
                Maintaining high standards of ethics, transparency and
                accountability in our work.
              </p>
            </div>

            <div className="value-item">
              <span>03</span>
              <h3>Collaboration</h3>
              <p>
                Working together and building partnerships to achieve
                stronger outcomes.
              </p>
            </div>

            <div className="value-item">
              <span>04</span>
              <h3>Innovation</h3>
              <p>
                Exploring creative and effective approaches to complex
                social challenges.
              </p>
            </div>

            <div className="value-item">
              <span>05</span>
              <h3>Impact-Driven</h3>
              <p>
                Focusing on meaningful and lasting outcomes for the
                communities we support.
              </p>
            </div>

          </div>

        </section>


        {/* =========================
            CTA
        ========================= */}
        <section className="vision-cta">

          <div>

            <p>
              BE PART OF THE CHANGE
            </p>

            <h2>
              Together, We Can Build
              <br />
              a More Equitable Future.
            </h2>

          </div>

          <a href="/#contact">
            Get Involved
            <span>→</span>
          </a>

        </section>

      </main>
    </>
  );
}

export default VisionMission;