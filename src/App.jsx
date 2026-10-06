import './App.css'
import { useState, useEffect } from 'react'

import { useLocation } from 'react-router-dom'
import Sehat from './pages/Sehat'
import Ujjawal from './pages/Ujjawal'
import Sambhavana from './pages/Sambhavana'
import Unnati from './pages/Unnati'
import About from './pages/About'
import OurStory from './pages/OurStory'
import OurRole from './pages/OurRole'
import VisionMission from './pages/VisionMission'
import MegaSchoolHealthDrive from './pages/MegaSchoolHealthDrive'
import SuhanaSafar from './pages/SuhanaSafar'
import CommunityHealthCamps from './pages/CommunityHealthCamps'
import Navbar from './components/Navbar';

import shardawelfarelogo from './assets/suwelfarenew.png'

import Suhealth from './assets/Suhealth.webp'
import Sueducation from './assets/Sueducation.webp'
import Suskill from './assets/Suskill.jpg'
import Suenvironment from './assets/Suenvironment.jpg'

import suhealthcamp from './assets/sucamp.jpg'
import sufoodhealth from './assets/sufoodhealth.jpg'
import sudriverr from './assets/sudriver2.jpg'
import education from './assets/educationicon.webp'
import health from './assets/healthicon.webp'
import cdicon from './assets/cdicon.png'
import welfarevideo from './assets/welfarevideo.mp4'




/* ==============================
   Hero Slider Data
============================== */

const heroSlides = [
  {
    image: suhealthcamp,
    label: 'HEALTHCARE',
    title: 'Creating Healthier Communities',
    text: 'Working to improve access to healthcare and promote healthier lives for children and communities.',
  },

  {
    image: sufoodhealth,
    label: 'COMMUNITY HEALTH',
    title: 'Building a Healthier Tomorrow',
    text: 'Connecting communities with healthcare awareness, screening and essential support.',
  },

  {
    image: sudriverr,
    label: 'SUHANA SAFAR',
    title: 'Healthcare That Reaches Communities',
    text: 'Extending healthcare awareness and support to people and communities who need it most.',
  },
]


function App() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    organisation: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);

  const location = useLocation();

  const handleChange = (e) => {
  const { name, value } = e.target;

  // Name: only alphabets and spaces
  if (name === "name") {
    const onlyLetters = value.replace(/[^A-Za-z ]/g, "");

    setForm({
      ...form,
      name: onlyLetters
    });

    return;
  }

  // Mobile: only digits and maximum 10 digits
  if (name === "mobile") {
    const onlyNumbers = value.replace(/\D/g, "").slice(0, 10);

    setForm({
      ...form,
      mobile: onlyNumbers
    });

    return;
  }

  setForm({
  ...form,
  [name]: value
});

setErrors((previousErrors) => ({
  ...previousErrors,
  [name]: ""
}));

};

const handleBlur = (e) => {
  const { name, value } = e.target;

  let errorMessage = "";

  if (name === "name") {
    if (value.trim().length < 3) {
      errorMessage = "Name must contain at least 3 characters.";
    }
  }

  if (name === "email") {
    if (!value.trim()) {
      errorMessage = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errorMessage = "Please enter a valid email address.";
    }
  }

  if (name === "mobile") {
    if (value.length !== 10) {
      errorMessage = "Mobile number must contain exactly 10 digits.";
    }
  }

  if (name === "organisation") {
    if (!value.trim()) {
      errorMessage = "Organisation name is required.";
    }
  }

  if (name === "message") {
    if (!value.trim()) {
      errorMessage = "Message is required.";
    }
  }

  if (errorMessage) {
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: errorMessage
    }));

    // User cannot move to the next field
  
  } else {
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: ""
    }));
  }
};

 const handleSubmit = async (e) => {
  e.preventDefault();

  const newErrors = {};

  // Name validation
  if (form.name.trim().length < 3) {
    newErrors.name = "Name must contain at least 3 characters.";
  }

  // Email validation
  if (!form.email.trim()) {
    newErrors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = "Please enter a valid email address.";
  }

  // Mobile validation
  if (form.mobile.length !== 10) {
    newErrors.mobile = "Mobile number must contain exactly 10 digits.";
  }

  // Organisation validation
  if (!form.organisation.trim()) {
    newErrors.organisation = "Organisation name is required.";
  }

  // Message validation
  if (!form.message.trim()) {
    newErrors.message = "Message is required.";
  }

  // Show errors and stop submission
  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  try {
    const response = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    const data = await response.json();

    if (response.ok) {
      alert("Message submitted successfully!");

      setForm({
        name: "",
        email: "",
        mobile: "",
        organisation: "",
        message: ""
      });

      setErrors({});
    } else {
      alert(data.message || "Something went wrong");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("Unable to connect to server");
  }
};

  /* ==============================
     Automatic Hero Slider
  ============================== */

  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((previousSlide) =>
        (previousSlide + 1) % heroSlides.length
      )

    }, 5000)


    return () => clearInterval(interval)

  }, [])


  /* ==============================
     Next Slide
  ============================== */

  const nextSlide = () => {

    setCurrentSlide(
      (currentSlide + 1) % heroSlides.length
    )

  }


  /* ==============================
     Previous Slide
  ============================== */

  const previousSlide = () => {

    setCurrentSlide(
      (currentSlide - 1 + heroSlides.length) % heroSlides.length
    )

  }

if (location.pathname === "/sehat") {
  return <Sehat />;
}
if (location.pathname === "/ujjawal") {
  return <Ujjawal />;
}
if (location.pathname === "/sambhavana") {
  return <Sambhavana />;
}
if (location.pathname === "/unnati") {
  return <Unnati />;
}
if (location.pathname === "/about") {
  return <About />;
}
if (location.pathname === "/our-story") {
  return <OurStory />;
}
if (location.pathname === "/our-role") {
  return <OurRole />;
}
if (location.pathname === "/vision-mission") {
  return <VisionMission />;
}
if (location.pathname === "/mega-school-health-drive") {
  return <MegaSchoolHealthDrive />;
}
if (location.pathname === "/suhana-safar") {
  return <SuhanaSafar />;
}
if (location.pathname === "/community-health-camps") {
  return <CommunityHealthCamps />;
}

  return (
    <>

      {/* ==============================
          Navbar
      ============================== */}

    <Navbar />


      {/* ==============================
          Hero / Impact Slider
      ============================== */}

      <section
        className="hero-slider"
        id="home"
      >

        {/* Background Image */}

        <img
          src={heroSlides[currentSlide].image}
          alt={heroSlides[currentSlide].title}
          className="hero-slider-image"
        />


        {/* Dark Overlay */}

        <div className="hero-slider-overlay"></div>


        {/* Hero Content */}

        <div className="hero-slider-content">

          <p className="hero-slider-label">
            {heroSlides[currentSlide].label}
          </p>


          <h1>
            {heroSlides[currentSlide].title}
          </h1>


          <p className="hero-slider-text">
            {heroSlides[currentSlide].text}
          </p>


          <button
            className="hero-slider-button"
            onClick={() => {
              document
                .getElementById('projects')
                ?.scrollIntoView({
                  behavior: 'smooth'
                })
            }}
          >
            Explore Our Work →
          </button>

        </div>


        {/* Previous Arrow */}

        <button
          className="hero-arrow hero-arrow-left"
          onClick={previousSlide}
          aria-label="Previous slide"
        >
          ←
        </button>


        {/* Next Arrow */}

        <button
          className="hero-arrow hero-arrow-right"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          →
        </button>


        {/* Slide Indicators */}

        <div className="hero-dots">

          {heroSlides.map((slide, index) => (

            <button
              key={index}
              className={`hero-dot ${
                currentSlide === index ? 'active' : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />

          ))}

        </div>


        {/* Slide Counter */}

        <div className="hero-slide-count">

          <span>
            {String(currentSlide + 1).padStart(2, '0')}
          </span>

          <span className="hero-slide-line"></span>

          <span>
            {String(heroSlides.length).padStart(2, '0')}
          </span>

        </div>

      </section>



      {/* ==============================
          Mission Section
      ============================== */}

      <section
        className="mission-section"
        id="mission"
      >

        <div className="section-heading">

          <p>
            OUR MISSION
          </p>

          <h2>
            Building a Better Tomorrow
          </h2>

          <span>
            We are committed to creating a healthier,
            educated and empowered society.
          </span>

        </div>


        <div className="mission-cards">


          {/* Education Card */}

          <div className="mission-card education-card">

           <div className="mission-icon">
  <img
    src={education}
    alt="Education"
  />
</div>

            <div>

              <h3>
                Education
              </h3>

              <p>
                Supporting access to quality education
                for underprivileged children.
              </p>

            </div>

          </div>



          {/* Healthcare Card */}

          <div className="mission-card healthcare-card">

            <div className="mission-icon">
  <img
    src={health}
    alt="Healthcare"
  />
</div>

            <div>

              <h3>
                Healthcare
              </h3>

              <p>
                Helping communities access essential
                healthcare and medical support.
              </p>

            </div>

          </div>



          {/* Community Card */}

          <div className="mission-card community-card">

           <div className="mission-icon">
  <img
    src={cdicon}
    alt="Community Development"
  />
</div>

            <div>

              <h3>
                Community Development
              </h3>

              <p>
                Creating opportunities for sustainable
                growth and community empowerment.
              </p>

            </div>

          </div>


        </div>

      </section>



      {/* ==============================
          About Us Section
      ============================== */}

      <section
        className="about-section"
        id="about"
      >

        <div className="about-content">

          <p className="about-label">
            ABOUT US
          </p>


          <h2>
            We Are Sharda Welfare
          </h2>


          <p>
            Sharda Welfare is a non-profit organization
            dedicated to bringing positive change in society.
            We focus on education, healthcare, and community
            development to create a better and more inclusive future.
          </p>


          <p>
            Our mission is driven by compassion, dedication
            and the belief that every individual deserves
            an opportunity to live a better life.
          </p>

<a href="/about" className="about-learn-btn">
  Learn More
  <span>→</span>
</a>

        </div>



        {/* YouTube Video */}

        <div className="about-media">

       <video
  className="youtube-video"
  controls
>
  <source src={welfarevideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

        </div>

      </section>



      {/* ==============================
          Our Work Section
      ============================== */}

      <section
        className="work-section"
        id="projects"
      >

        <div className="work-heading">

          <p className="work-label">
            OUR WORK
          </p>


          <h2>
            Creating Impact Where It Matters
          </h2>


         <p className="about-work-description">
  Our initiatives focus on healthcare, education, skill development,
  environmental sustainability and access to justice.
</p>

        </div>



        <div className="work-grid">


          {/* SEHAT */}

          <div className="work-card">

            <div className="work-image healthcare-image">

              <img
                src={Suhealth}
                alt="Sharda Welfare healthcare initiative"
              />

              <span>
                Healthcare
              </span>

            </div>


            <div className="work-content">

              <p className="work-category">
                HEALTHCARE
              </p>


              <h3>
                Sehat
              </h3>


              <p>
                Improving access to healthcare and
                promoting better health awareness
                among vulnerable communities.
              </p>


              <a href="#contact">
                Learn More →
              </a>

            </div>

          </div>



          {/* UJJAWAL */}

          <div className="work-card">

            <div className="work-image education-image">

              <img
                src={Sueducation}
                alt="Sharda Welfare education initiative"
              />

              <span>
                Education
              </span>

            </div>


            <div className="work-content">

              <p className="work-category">
                EDUCATION
              </p>


              <h3>
                Ujjwal
              </h3>


              <p>
                Supporting equitable access to quality
                education and strengthening learning
                opportunities.
              </p>


              <a href="#contact">
                Learn More →
              </a>

            </div>

          </div>



          {/* SAMBHAVANA */}

          <div className="work-card">

            <div className="work-image skills-image">

              <img
                src={Suskill}
                alt="Sharda Welfare skill development initiative"
              />

              <span>
                Skill Development
              </span>

            </div>


            <div className="work-content">

              <p className="work-category">
                SKILL DEVELOPMENT
              </p>


              <h3>
                Sambhavana
              </h3>


              <p>
                Developing practical, industry-relevant
                skills and creating pathways towards
                economic independence.
              </p>


              <a href="#contact">
                Learn More →
              </a>

            </div>

          </div>



          {/* UNNATI */}

          <div className="work-card">

            <div className="work-image environment-image">

              <img
                src={Suenvironment}
                alt="Sharda Welfare environmental initiative"
              />

              <span>
                Environment
              </span>

            </div>


            <div className="work-content">

              <p className="work-category">
                ENVIRONMENT
              </p>


              <h3>
                Unnati
              </h3>


              <p>
                Promoting environmental awareness,
                sustainable practices and community
                participation.
              </p>


              <a href="#contact">
                Learn More →
              </a>

            </div>

          </div>


        </div>

      </section>




      {/* ==============================
          Our Impact Section
      ============================== */}

      <section
        className="impact-section"
        id="impact"
      >

        <div className="impact-heading">

          <p>
            OUR IMPACT
          </p>


          <h2>
            Making a Difference Together
          </h2>


          <span>
            Our work focuses on creating meaningful
            change through healthcare, education
            and community initiatives.
          </span>

        </div>



        <div className="impact-stats">


          {/* Impact 1 */}

          <div className="impact-stat">

            <h3>
              2,600+
            </h3>

            <p>
              Government school children reached
            </p>

          </div>



          {/* Impact 2 */}

          <div className="impact-stat">

            <h3>
              6
            </h3>

            <p>
              Government schools covered
            </p>

          </div>



          {/* Impact 3 */}

          <div className="impact-stat">

            <h3>
              85
            </h3>

            <p>
              Children engaged in a recent mega camp
            </p>

          </div>



          {/* Impact 4 */}

          <div className="impact-stat">

            <h3>
              5
            </h3>

            <p>
              Key areas of community development
            </p>

          </div>


        </div>

      </section>



      {/* ==============================
          Latest Updates Section
      ============================== */}

      <section
        className="updates-section"
        id="blogs"
      >

        <div className="updates-heading">

          <p>
            LATEST UPDATES
          </p>


          <h2>
            Stories From Our Work
          </h2>


          <span>
            Discover the initiatives and activities through which
            Sharda Welfare continues to create meaningful change.
          </span>

        </div>


        <div className="updates-grid">


          {/* Update Card 1 */}

          <div className="update-card">

            <div className="update-image">

              <img
                src={suhealthcamp}
                alt="Mega School Health Drive"
              />

            </div>


            <div className="update-content">

              <p className="update-category">
                HEALTHCARE
              </p>


              <h3>
                Mega School Health Drive
              </h3>


              <p>
                A healthcare initiative that reached more than
                2,600 government school children across six
                government schools.
              </p>


              <a href="#">
                Read More →
              </a>

            </div>

          </div>



          {/* Update Card 2 */}

          <div className="update-card">

            <div className="update-image">

              <img
                src={sufoodhealth}
                alt="Community Health Camp"
              />

            </div>


            <div className="update-content">

              <p className="update-category">
                COMMUNITY
              </p>


              <h3>
                Community Health Camp
              </h3>


              <p>
                A recent mega camp at Government School
                Chuharpur Khadar engaged 85 children through
                health-focused activities.
              </p>


              <a href="#">
                Read More →
              </a>

            </div>

          </div>



          {/* Update Card 3 */}

          <div className="update-card">

            <div className="update-image">

              <img
                src={sudriverr}
                alt="Suhana Safar Community Health Campaign"
              />

            </div>


            <div className="update-content">

              <p className="update-category">
                HEALTH & COMMUNITY
              </p>


              <h3>
                Suhana Safar
              </h3>


              <p>
                A community health campaign focused on truck
                drivers, helpers, families and nearby communities.
              </p>


              <a href="#">
                Read More →
              </a>

            </div>

          </div>


        </div>

      </section>



      {/* ==============================
          Get Involved Section
      ============================== */}

      <section
        className="involved-section"
        id="involved"
      >

        <div className="involved-content">

          <p className="involved-label">
            GET INVOLVED
          </p>


          <h2>
            Be a Part of the Change
          </h2>


          <p>
            Together, we can create meaningful opportunities,
            strengthen communities and build a brighter future.
            Join us in supporting education, healthcare and
            community development.
          </p>


        <div className="involved-buttons">

        <a href="#contact" className="involved-primary-btn">
         Join Us
        <span>→</span>
        </a>

  <a href="#work" className="involved-secondary-btn">
    Support Our Work
    <span>→</span>
  </a>

</div>

        </div>

      </section>



      {/* ==============================
          Contact Section
      ============================== */}

      <section
        className="contact-section"
        id="contact"
      >

        <div className="contact-heading">

          <p>
            CONTACT US
          </p>


          <h2>
            Let's Connect With Us
          </h2>


          <span>
            Have a question, want to collaborate, or would like to
            learn more about our initiatives? Get in touch with us.
          </span>

        </div>



        <div className="contact-container">


          {/* Contact Information */}

          <div className="contact-info">

            <h3>
              Get In Touch
            </h3>


            <p>
              We would love to hear from you. Reach out to us
              for collaborations, queries and more information
              about our welfare initiatives.
            </p>


            <div className="contact-item">

              <div className="contact-icon">
                📍
              </div>

              <div>

                <h4>
                  Address
                </h4>

                <p>
                  Plot No. 32-34, Knowledge Park III,
                  Greater Noida, Uttar Pradesh 201310
                </p>

              </div>

            </div>



            <div className="contact-item">

              <div className="contact-icon">
                ✉
              </div>

              <div>

                <h4>
                  Email
                </h4>

                <p>
                  info@shardawelfare.org
                </p>

              </div>

            </div>



            <div className="contact-item">

              <div className="contact-icon">
                ☎
              </div>

              <div>

                <h4>
                  Phone
                </h4>

                <p>
                  +91-8800998844
                </p>

              </div>

            </div>

          </div>



          {/* Contact Form */}

          <div className="contact-form">

            <h3>
              Send Us a Message
            </h3>


        <form onSubmit={handleSubmit}>
<div className="form-row">

  {/* Name */}
  <div className="form-field">

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      value={form.name}
      onChange={handleChange}
      onBlur={handleBlur}
      required
    />

    {errors.name && (
      <small className="form-error">
        {errors.name}
      </small>
    )}

  </div>


  {/* Email */}
  <div className="form-field">

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      value={form.email}
      onChange={handleChange}
      onBlur={handleBlur}
      required
    />

    {errors.email && (
      <small className="form-error">
        {errors.email}
      </small>
    )}

  </div>

</div>

<div className="form-field">

  <input
    type="tel"
    name="mobile"
    placeholder="Mobile Number"
    value={form.mobile}
    onChange={handleChange}
    onBlur={handleBlur}
    maxLength="10"
    required
  />

  {errors.mobile && (
    <small className="form-error">
      {errors.mobile}
    </small>
  )}

</div>

             <div className="form-field">

  <input
    type="text"
    name="organisation"
    placeholder="Organisation"
    value={form.organisation}
    onChange={handleChange}
    onBlur={handleBlur}
    required
  />

  {errors.organisation && (
    <small className="form-error">
      {errors.organisation}
    </small>
  )}

</div>

<div className="form-field">

  <textarea
    name="message"
    rows="5"
    placeholder="Your Message"
    value={form.message}
    onChange={handleChange}
    onBlur={handleBlur}
    required
  ></textarea>

  {errors.message && (
    <small className="form-error">
      {errors.message}
    </small>
  )}

</div>
              <button
  type="submit"
  className="submit-btn"
>
  SUBMIT
</button>

            </form>

          </div>

        </div>

      </section>


    </>
  )
}


export default App