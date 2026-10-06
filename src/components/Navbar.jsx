import React from "react";
import { Link } from "react-router-dom";
import shardawelfarelogo from "../assets/suwelfarenew.png";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">

        <Link to="/" onClick={scrollToTop}>
        
       <img
  src={shardawelfarelogo}
  alt="Sharda Welfare"
/>
        </Link>

      </div>


      {/* Navigation Links */}
      <div className="nav-links">

        {/* Home */}
       <Link to="/" onClick={scrollToTop}>Home</Link>


        {/* About Us Dropdown */}
        <div className="nav-dropdown">

          <button className="nav-dropdown-btn">
            About Us <span>▾</span>
          </button>

          <div className="dropdown-menu">

          <Link to="/about" onClick={scrollToTop}>
  About Sharda Welfare
</Link>

            
            <Link to="/our-story" onClick={scrollToTop}>
  Our Story
</Link>

           <Link to="/our-role" onClick={scrollToTop}>
  Our Role
</Link>

            <Link to="/vision-mission" onClick={scrollToTop}>
              Vision &amp; Mission
            </Link>

          </div>

        </div>


        {/* Our Work Dropdown */}
        <div className="nav-dropdown">

          <button className="nav-dropdown-btn">
            Our Work <span>▾</span>
          </button>

          <div className="dropdown-menu">

           <Link to="/sehat" onClick={scrollToTop}>
  Healthcare — SEHAT
</Link>

<Link to="/ujjawal" onClick={scrollToTop}>
  Education — UJJAWAL
</Link>

<Link to="/sambhavana" onClick={scrollToTop}>
  Skill Development — SAMBHAVANA
</Link>

<Link to="/unnati" onClick={scrollToTop}>
  Environment — UNNATI
</Link>

          </div>

        </div>


        {/* Projects Dropdown */}
        <div className="nav-dropdown">

          <button className="nav-dropdown-btn">
            Projects <span>▾</span>
          </button>

          <div className="dropdown-menu">

           <Link to="/mega-school-health-drive" onClick={scrollToTop}>
  Mega School Health Drive
</Link>

            <Link to="/suhana-safar">
              Suhana Safar
            </Link>

            <Link to="/community-health-camps">
              Community Health Camps
            </Link>

          </div>

        </div>


        {/* Blogs */}

        <Link to="/blogs" onClick={scrollToTop}>
  Blogs
</Link>


        {/* Contact */}

        <a href="/#contact" onClick={scrollToTop}>
  Contact
</a>

      </div>


      {/* Donate Button */}
      <button className="donate-btn">
        ♥ Donate Now
      </button>

    </nav>
  );
}

export default Navbar;