import React from "react";
import Navbar from "../components/Navbar";

function SuhanaSafar() {
  return (
    <>
      <Navbar />

      <div className="program-page">

        {/* Page Header */}
        <section className="program-page-header">
          <p>PROJECTS</p>
          <h1>SUHANA SAFAR</h1>
          <span>Creating Meaningful Experiences Through Community Outreach</span>
        </section>

        {/* Main Content */}
        <section className="program-page-content">

          {/* Image */}
          <div className="program-page-image">
            <div className="image-placeholder">
              <span>Suhana Safar Image</span>
              <small>SUHANA SAFAR</small>
            </div>
          </div>

          {/* Text */}
          <div className="program-page-text">

            <p className="program-label">COMMUNITY OUTREACH</p>

            <h2>Suhana Safar</h2>

            <h3>Connecting People Through Community Initiatives</h3>

            <p>
              Suhana Safar is a community-focused initiative designed to
              create meaningful experiences and strengthen engagement with
              communities.
            </p>

            <p>
              Through community outreach and welfare activities, the project
              aims to encourage participation, awareness and positive social
              interaction.
            </p>

            <div className="program-highlights">

              <div className="program-highlight">
                <span>01</span>
                <div>
                  <h4>Community Engagement</h4>
                  <p>
                    Creating opportunities for meaningful interaction and
                    engagement with communities.
                  </p>
                </div>
              </div>

              <div className="program-highlight">
                <span>02</span>
                <div>
                  <h4>Social Awareness</h4>
                  <p>
                    Encouraging awareness and participation through
                    community-focused activities.
                  </p>
                </div>
              </div>

              <div className="program-highlight">
                <span>03</span>
                <div>
                  <h4>Positive Experiences</h4>
                  <p>
                    Supporting initiatives that create meaningful and
                    positive experiences for communities.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

      </div>
    </>
  );
}

export default SuhanaSafar;