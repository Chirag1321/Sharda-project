import React from "react";
import Navbar from "../components/Navbar";
import suRole from "../assets/suRole.jpg";
import suRole2 from "../assets/suRole2.jpg";

function OurRole() {
  return (
    <>
      <Navbar />

      <main className="role-page">

        {/* =========================
            OUR ROLE HERO
        ========================= */}
        <section className="role-hero">

          <div className="role-hero-content">

            <p className="role-eyebrow">
              SHARDA WELFARE • OUR ROLE
            </p>

            <h1>
           Turning Purpose Into
            <br />
           Meaningful Community Action
            </h1>

            <p className="role-hero-description">
              Sharda Welfare Foundation brings together the philanthropic
              efforts of Sharda Group to support healthcare, education,
              skill development and environmental initiatives for
              communities.
            </p>

            <a href="#role-focus" className="role-hero-button">
              Explore Our Role
              <span>↓</span>
            </a>

          </div>


          {/* Image Placeholder */}
         <div className="role-hero-image">

  <img
    src={suRole}
    alt="Sharda Welfare community initiative"
  />

</div>

        </section>


        {/* =========================
            OUR ROLE IN THE COMMUNITY
        ========================= */}
        <section className="role-intro">

          <div className="role-intro-image">

  <img
    src={suRole2}
    alt="Sharda Welfare community welfare initiative"
  />

</div>

          <div className="role-intro-content">

            <p className="role-label">
              OUR ROLE IN THE COMMUNITY
            </p>

            <h2>
              Bringing Welfare
              <br />
              Efforts Together
            </h2>

            <p>
              Sharda Welfare Foundation represents the philanthropic
              initiative of Sharda Group. The foundation was established
              to bring greater structure and focus to community welfare
              activities and strengthen their reach among economically
              weaker communities.
            </p>

            <p>
              Its work focuses on important areas such as healthcare,
              education, youth skill development, cleanliness and
              environmental awareness, with the aim of creating meaningful
              and sustainable community development.
            </p>

            <div className="role-highlight">

              <span>01</span>

              <div>

                <h4>
                  Community-Centred Approach
                </h4>

                <p>
                  Working with communities and focusing on areas that
                  can contribute to better health, education, skills
                  and living conditions.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            AREAS OF CONTRIBUTION
        ========================= */}
        <section className="role-focus" id="role-focus">

          <div className="role-section-heading">

            <p className="role-label">
              OUR AREAS OF CONTRIBUTION
            </p>

            <h2>
              Focused on Essential
              <br />
              Community Needs
            </h2>

            <p>
              The foundation has structured its community-development
              work around key areas that address essential needs and
              support long-term well-being.
            </p>

          </div>


          <div className="role-focus-grid">

            {/* Healthcare */}
            <div className="role-focus-card">

              <span className="role-card-number">
                01
              </span>

              <h3>
                Healthcare Improvement
              </h3>

              <p>
                Supporting better healthcare facilities, awareness and
                access for economically weaker and marginalised communities.
              </p>

            </div>


            {/* Skill Development */}
            <div className="role-focus-card">

              <span className="role-card-number">
                02
              </span>

              <h3>
                Youth Skill Development
              </h3>

              <p>
                Supporting skill development and opportunities that can
                help young people build capabilities and improve their
                livelihoods.
              </p>

            </div>


            {/* Education */}
            <div className="role-focus-card">

              <span className="role-card-number">
                03
              </span>

              <h3>
                Education
              </h3>

              <p>
                Promoting the importance of education and supporting
                access to learning opportunities within communities.
              </p>

            </div>


            {/* Cleanliness */}
            <div className="role-focus-card">

              <span className="role-card-number">
                04
              </span>

              <h3>
                Cleanliness &amp; Waste Management
              </h3>

              <p>
                Creating awareness about cleanliness, waste segregation
                and responsible waste management practices.
              </p>

            </div>

          </div>

        </section>


        {/* =========================
            WORKING WITH COMMUNITIES
        ========================= */}
        <section className="role-community">

          <div className="role-community-content">

            <p className="role-label">
              WORKING WITH COMMUNITIES
            </p>

            <h2>
              Creating Deeper,
              <br />
              Long-Term Impact
            </h2>

            <p>
              Sharda Welfare Foundation primarily works with communities
              located around the campuses of Sharda Group. Its approach
              focuses on building meaningful engagement with communities
              and addressing issues that affect their everyday well-being.
            </p>

            <p>
              The foundation also contributes to awareness around
              initiatives such as Swachh Bharat Mission, waste management,
              waste segregation, livestock health and organic farming.
            </p>

          </div>


          <div className="role-community-points">

            <div className="role-community-point">

              <span>01</span>

              <div>

                <h4>
                  Community Engagement
                </h4>

                <p>
                  Building meaningful connections with communities and
                  understanding their needs.
                </p>

              </div>

            </div>


            <div className="role-community-point">

              <span>02</span>

              <div>

                <h4>
                  Awareness &amp; Participation
                </h4>

                <p>
                  Encouraging awareness around health, education,
                  environment and responsible community practices.
                </p>

              </div>

            </div>


            <div className="role-community-point">

              <span>03</span>

              <div>

                <h4>
                  Long-Term Development
                </h4>

                <p>
                  Working towards sustainable improvements that can
                  strengthen communities over time.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =========================
            CLOSING CTA
        ========================= */}
        <section className="role-cta">

          <div>

            <p className="role-label">
              OUR COMMITMENT
            </p>

            <h2>
              Building Stronger Communities
              <br />
              Through Meaningful Action.
            </h2>

            <p>
              Our role is to turn commitment into action and contribute
              towards healthier, more empowered and sustainable communities.
            </p>

          </div>

          <a href="/#contact" className="role-cta-button">
            Get Involved
            <span>→</span>
          </a>

        </section>

      </main>
    </>
  );
}

export default OurRole;