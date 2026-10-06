import React from "react";
import Navbar from "../components/Navbar";

function MegaSchoolHealthDrive() {
  return (
    <>
      <Navbar />

      <div className="program-page">

        {/* Page Header */}
        <section className="program-page-header">
          <p>PROJECTS</p>
          <h1>MEGA SCHOOL HEALTH DRIVE</h1>
          <span>Promoting Better Health for School Children</span>
        </section>

        {/* Main Content */}
        <section className="program-page-content">

          {/* Image */}
          <div className="program-page-image">
            <div className="image-placeholder">
              <span>Health Drive Image</span>
              <small>MEGA SCHOOL HEALTH DRIVE</small>
            </div>
          </div>

          {/* Text */}
          <div className="program-page-text">

            <p className="program-label">HEALTHCARE PROJECT</p>

            <h2>Mega School Health Drive</h2>

            <h3>Supporting the Health of School Children</h3>

            <p>
              The Mega School Health Drive is a community healthcare
              initiative focused on supporting the health and well-being of
              children studying in government schools.
            </p>

            <p>
              The initiative brings healthcare professionals and community
              partners together to provide health-focused support and create
              greater awareness among school children.
            </p>

            <div className="program-highlights">

              <div className="program-highlight">
                <span>01</span>
                <div>
                  <h4>2,600+ Children</h4>
                  <p>
                    The health drive covered more than 2,600 government school
                    children.
                  </p>
                </div>
              </div>

              <div className="program-highlight">
                <span>02</span>
                <div>
                  <h4>6 Government Schools</h4>
                  <p>
                    The initiative was conducted across six government
                    schools in Greater Noida.
                  </p>
                </div>
              </div>

              <div className="program-highlight">
                <span>03</span>
                <div>
                  <h4>Healthcare Professionals</h4>
                  <p>
                    Medical teams supported the initiative with healthcare
                    services and health-related activities.
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

export default MegaSchoolHealthDrive;