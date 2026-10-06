import React from "react";
import Navbar from "../components/Navbar";

function CommunityHealthCamps() {
  return (
    <>
      <Navbar />

      <div className="program-page">

        {/* Page Header */}
        <section className="program-page-header">
          <p>PROJECTS</p>
          <h1>COMMUNITY HEALTH CAMPS</h1>
          <span>Bringing Healthcare Closer to Communities</span>
        </section>

        {/* Main Content */}
        <section className="program-page-content">

          {/* Image */}
          <div className="program-page-image">
            <div className="image-placeholder">
              <span>Community Health Camp Image</span>
              <small>HEALTH CAMPS</small>
            </div>
          </div>

          {/* Text */}
          <div className="program-page-text">

            <p className="program-label">HEALTHCARE PROJECT</p>

            <h2>Community Health Camps</h2>

            <h3>Bringing Healthcare Closer to Communities</h3>

            <p>
              Community Health Camps are part of Sharda Welfare's efforts to
              support healthcare access and promote health awareness within
              communities.
            </p>

            <p>
              These activities bring healthcare support closer to people and
              help create greater awareness about health and well-being.
            </p>

            <div className="program-highlights">

              <div className="program-highlight">
                <span>01</span>
                <div>
                  <h4>Healthcare Access</h4>
                  <p>
                    Bringing healthcare-focused activities closer to
                    communities.
                  </p>
                </div>
              </div>

              <div className="program-highlight">
                <span>02</span>
                <div>
                  <h4>Health Awareness</h4>
                  <p>
                    Encouraging communities to become more aware of health
                    and well-being.
                  </p>
                </div>
              </div>

              <div className="program-highlight">
                <span>03</span>
                <div>
                  <h4>Community Outreach</h4>
                  <p>
                    Connecting with communities through healthcare and
                    welfare activities.
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

export default CommunityHealthCamps;