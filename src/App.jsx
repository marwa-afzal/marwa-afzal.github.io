
import { useState, useEffect } from "react";

import galleryVideo from "./assets/gallery-demo.mp4";
import sportsAcademyVideo from "./assets/sports-academy-demo.mp4";
import multipageVideo from "./assets/multipage-demo.mp4";
import todoVideo from "./assets/todo-demo.mp4";
import hayaPhoto from "./assets/pic.jpg";
import "./App.css";

function App() {
  
const [showSportsAcademyVideo, setShowSportsAcademyVideo] = useState(false);

useEffect(() => {
  if (showSportsAcademyVideo) {
    const video = document.querySelector(".sports-academy-full-video");

    if (video) {
      video.muted = true;
      video.volume = 0;
    }
  }
}, [showSportsAcademyVideo]);


  const [showMultipageVideo, setShowMultipageVideo] = useState(false);

  const [showGalleryVideo, setShowGalleryVideo] = useState(false);
  const [showTodoVideo, setShowTodoVideo] = useState(false);
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">MARWA<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk <span>↗</span>
        </a>
      </nav>


      {/* HERO */}
      <main>

        <section className="hero-section" id="home">

          <div className="hero-content">

            <div className="hero-tag">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="eyebrow">
              FULL STACK DEVELOPER
            </p>

            <h1>
              Turning ideas
              <br />
              into <em>digital</em>
              <br />
              experiences.
            </h1>

            <p className="hero-description">
              I'm Marwa Afzal — a Computer Science student and aspiring
              Full Stack Developer who loves transforming creative ideas
              into modern, responsive and meaningful digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Work <span>↗</span>
              </a>

              <a href="#about" className="text-btn">
                More About Me <span>↓</span>
              </a>
            </div>

          </div>


          <div className="hero-visual">

            <div className="circle-text">
              <span>• CREATIVE • DEVELOPER • DESIGNER •</span>
            </div>

            <div className="image-frame">
              <div className="image-glow"></div>

              <img
                src={hayaPhoto}
                alt="Marwa Afzal"
                className="profile-image"
              />

              <div className="image-number">01</div>
            </div>

            <div className="floating-card">
              <span className="card-small">CURRENTLY</span>
              <strong>Learning.</strong>
              <p>Building. Creating.</p>
            </div>

          </div>

        </section>


        {/* MARQUEE */}
        <div className="marquee">
          <div className="marquee-track">
            <span>WEB DEVELOPMENT</span>
            <b>✦</b>
            <span>UI / UX</span>
            <b>✦</b>
            <span>REACT</span>
            <b>✦</b>
            <span>FULL STACK</span>
            <b>✦</b>
            <span>CREATIVE DESIGN</span>
            <b>✦</b>
            <span>WEB DEVELOPMENT</span>
            <b>✦</b>
            <span>UI / UX</span>
            <b>✦</b>
          </div>
        </div>


        {/* ABOUT */}
        <section className="about-section" id="about">

          <div className="section-top">
            <span className="section-number">01</span>
            <span className="section-label">ABOUT ME</span>
          </div>

          <div className="about-grid">

            <h2>
              Code with purpose.
              <br />
              Design with <em>intention.</em>
            </h2>

            <div className="about-text">
              <p className="large-text">
                I believe a good website should not only look beautiful —
                it should have a purpose, tell a story and create a
                meaningful experience.
              </p>

              <p>
                I'm currently studying Computer Science and developing
                my skills across frontend and backend development. I enjoy
                combining technology, creativity and problem-solving to
                build digital products that people can actually use.
              </p>

              <a href="#contact" className="line-link">
                Let's work together <span>↗</span>
              </a>
            </div>

          </div>

        </section>


        {/* EDUCATION */}
        <section className="education-section">

          <div className="section-top">
            <span className="section-number">02</span>
            <span className="section-label">BACKGROUND</span>
          </div>

          <div className="education-card">

            <div className="education-year">
              <span>EDUCATION</span>
              <strong>BS</strong>
            </div>

            <div className="education-content">
              <span className="card-label">CURRENTLY STUDYING</span>
              <h3>Bachelor's Degree in Computer Science</h3>
              <p>
                Building a strong foundation in programming, software
                development, databases, web technologies and problem solving.
              </p>
            </div>

            <div className="card-arrow">↗</div>

          </div>

        </section>


        {/* PROJECTS */}
        <section className="projects-section" id="projects">

          <div className="section-top">
            <span className="section-number">03</span>
            <span className="section-label">SELECTED WORK</span>
          </div>

          <div className="projects-heading">
            <h2>
              Things I've
              <br />
              <em>created.</em>
            </h2>

            <p>
              A selection of projects created while learning, experimenting
              and solving real-world problems.
            </p>
          </div>


          <div className="projects-grid">

            {/* PROJECT 01 */}
            
<article className="project-card project-large">

  <div className="project-visual project-one">

    <video
      className="project-video-preview"
      src={todoVideo}
      muted
      loop
      autoPlay
      playsInline
    />

    <div
      className="project-overlay"
      onClick={() => setShowTodoVideo(true)}
    >
      <span>VIEW PROJECT ↗</span>
    </div>

  

  </div>


  <div className="project-info">

    <div>
      <span className="project-category">
        FULL STACK WEB DEVELOPMENT
      </span>

      <h3>To-do Management App</h3>
    </div>

    <p>
      A clean and responsive task management application designed
      to organize everyday tasks efficiently with a simple and
      user-friendly interface.
    </p>

    <div className="tech-list">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>Node.js</span>
      <span>Express.js</span>
      <span>REST API</span>
      <span>JSON</span>
    </div>

  </div>

</article>


{/* TODO VIDEO MODAL */}

{showTodoVideo && (
  <div
    className="video-modal"
    onClick={() => setShowTodoVideo(false)}
  >

    <div
      className="video-modal-content"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="video-close"
        onClick={() => setShowTodoVideo(false)}
      >
        ×
      </button>

      <video
        className="todo-full-video"
        src={todoVideo}
        controls
        autoPlay
        playsInline
      />

      <div className="video-modal-info">

        <span>FULL STACK WEB DEVELOPMENT</span>

        <h3>To-do Management App</h3>

        <p>
          A responsive task management application built to
          create, edit, complete and delete tasks efficiently.
        </p>

        <div className="modal-tech-list">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>REST API</span>
          <span>JSON</span>
        </div>

      </div>

    </div>

  </div>
)}


            {/* PROJECT 02 */}
         
{/* =========================================================
    PROJECT 02 — GALLERY WEBSITE
========================================================= */}

<article className="project-card project-large">

  {/* PROJECT VIDEO */}

  <div className="project-visual project-two">

    <video
      className="project-video-preview"
      src={galleryVideo}
      muted
      loop
      autoPlay
      playsInline
    />

    {/* VIEW PROJECT */}

    <div
      className="project-overlay"
      onClick={() => setShowGalleryVideo(true)}
    >
      <span>VIEW PROJECT ↗</span>
    </div>

    

  </div>


  {/* PROJECT INFORMATION */}

  <div className="project-info">

    <div>

      <span className="project-category">
        FRONTEND WEB DEVELOPMENT
      </span>

      <h3>Creative Gallery Website</h3>

    </div>


    <p>
      A modern and responsive gallery website created to
      showcase images and visual content through a clean,
      elegant and interactive interface.
    </p>


    {/* TECHNOLOGIES */}

    <div className="tech-list">

      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>Responsive Design</span>
      <span>CSS Grid</span>
      <span>Flexbox</span>

    </div>

  </div>

</article>


{/* =========================================================
    GALLERY VIDEO MODAL
========================================================= */}

{showGalleryVideo && (

  <div
    className="video-modal"
    onClick={() => setShowGalleryVideo(false)}
  >

    <div
      className="video-modal-content"
      onClick={(e) => e.stopPropagation()}
    >

      {/* CLOSE BUTTON */}

      <button
        className="video-close"
        onClick={() => setShowGalleryVideo(false)}
        aria-label="Close project video"
      >
        ×
      </button>


      {/* FULL PROJECT VIDEO */}

      <video
        className="gallery-full-video"
        src={galleryVideo}
        controls
        autoPlay
        playsInline
      />


      {/* PROJECT DETAILS */}

      <div className="video-modal-info">

        <span>
          FRONTEND WEB DEVELOPMENT
        </span>


        <h3>
          Creative Gallery Website
        </h3>


        <p>
          A responsive gallery website designed to present
          images and visual content in an attractive and
          user-friendly interface. The project focuses on
          clean design, responsive layouts and interactive
          JavaScript functionality.
        </p>


        {/* TECHNOLOGIES */}

        <div className="modal-tech-list">

          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Responsive Design</span>
          <span>CSS Grid</span>
          <span>Flexbox</span>

        </div>

      </div>

    </div>

  </div>

)}




            {/* PROJECT 03 */}
           
{/* =========================================================
    PROJECT 03 — MULTIPAGE WEBSITE
========================================================= */}

<article className="project-card project-large">

  {/* PROJECT VIDEO */}

  <div className="project-visual project-three">

    <video
      className="project-video-preview"
      src={multipageVideo}
      muted
      loop
      autoPlay
      playsInline
    />

    {/* VIEW PROJECT */}

    <div
      className="project-overlay"
      onClick={() => setShowMultipageVideo(true)}
    >
      <span>VIEW PROJECT ↗</span>
    </div>

    {/* PROJECT NUMBER */}

 

  </div>


  {/* PROJECT INFORMATION */}

  <div className="project-info">

    <div>

      <span className="project-category">
        FRONTEND WEB DEVELOPMENT
      </span>

      <h3>Multipage Website</h3>

    </div>


    <p>
      A multipage website created as a frontend practice
      project, focusing on modern UI/UX, responsive layouts,
      smooth navigation and interactive JavaScript elements.
    </p>


    {/* TECHNOLOGIES */}

    <div className="tech-list">

      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>UI/UX Design</span>
      <span>Responsive Design</span>

    </div>

  </div>

</article>


{/* =========================================================
    MULTIPAGE WEBSITE VIDEO MODAL
========================================================= */}

{showMultipageVideo && (

  <div
    className="video-modal"
    onClick={() => setShowMultipageVideo(false)}
  >

    <div
      className="video-modal-content"
      onClick={(e) => e.stopPropagation()}
    >

      {/* CLOSE BUTTON */}

      <button
        className="video-close"
        onClick={() => setShowMultipageVideo(false)}
        aria-label="Close project video"
      >
        ×
      </button>


      {/* FULL PROJECT VIDEO */}

      <video
        className="multipage-full-video"
        src={multipageVideo}
        controls
        autoPlay
        playsInline
      />


      {/* PROJECT DETAILS */}

      <div className="video-modal-info">

        <span>
          FRONTEND WEB DEVELOPMENT
        </span>


        <h3>
          Multipage Website
        </h3>


        <p>
          A frontend multipage website built for practice
          and learning, with a strong focus on UI/UX,
          responsive design, clean layouts and interactive
          JavaScript functionality.
        </p>


        {/* TECHNOLOGIES */}

        <div className="modal-tech-list">

          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>UI/UX Design</span>
          <span>Responsive Design</span>

        </div>

      </div>

    </div>

  </div>

)}

{/* =========================================================
    PROJECT 04 — SPORTS ACADEMY MANAGEMENT SYSTEM
========================================================= */}

<article className="project-card project-large">

  {/* PROJECT VIDEO */}

  <div className="project-visual project-four">

    <video
      className="project-video-preview"
      src={sportsAcademyVideo}
      muted
      loop
      autoPlay
      playsInline
    />

    {/* VIEW PROJECT */}

    <div
      className="project-overlay"
      onClick={() => setShowSportsAcademyVideo(true)}
    >
      <span>VIEW PROJECT ↗</span>
    </div>

    {/* PROJECT NUMBER */}

 
  </div>


  {/* PROJECT INFORMATION */}

  <div className="project-info">

    <div>

      <span className="project-category">
        UNIVERSITY GROUP PROJECT
      </span>

      <h3>Sports Academy Management System</h3>

    </div>


    <p>
      A university group project developed to manage sports
      academy activities through a structured management system.
      The project focused on object-oriented programming,
      graphical user interface design and practical software
      development using collaborative GitHub workflows.
    </p>


    {/* TECHNOLOGIES */}

    <div className="tech-list">

      <span>JavaScript</span>
      <span>OOP</span>
      <span>GUI</span>
      <span>Git</span>
      <span>GitHub</span>

    </div>

  </div>

</article>


{/* =========================================================
    SPORTS ACADEMY VIDEO MODAL
========================================================= */}

{showSportsAcademyVideo && (

  <div
    className="video-modal"
    onClick={() => setShowSportsAcademyVideo(false)}
  >

    <div
      className="video-modal-content"
      onClick={(e) => e.stopPropagation()}
    >

      {/* CLOSE BUTTON */}

      <button
        className="video-close"
        onClick={() => setShowSportsAcademyVideo(false)}
        aria-label="Close project video"
      >
        ×
      </button>


      {/* FULL PROJECT VIDEO */}

     
{/* FULL VIDEO — SOUND OFF + FULLSCREEN */}


<video
  className="sports-academy-full-video"
  src={sportsAcademyVideo}
  muted
  autoPlay
  controls
  playsInline
  onLoadedMetadata={(e) => {
    e.currentTarget.muted = true;
    e.currentTarget.volume = 0;
  }}
  onPlay={(e) => {
    e.currentTarget.muted = true;
    e.currentTarget.volume = 0;
  }}
/>






      {/* PROJECT DETAILS */}

      <div className="video-modal-info">

        <span>
          UNIVERSITY GROUP PROJECT
        </span>


        <h3>
          Sports Academy Management System
        </h3>


        <p>
          A group-based university project designed to
          demonstrate object-oriented programming and GUI
          development through a practical sports academy
          management system. GitHub was used for collaborative
          development and project version control.
        </p>


        {/* TECHNOLOGIES */}

        <div className="modal-tech-list">

          <span>JavaScript</span>
          <span>OOP</span>
          <span>GUI</span>
          <span>Git</span>
          <span>GitHub</span>

        </div>

      </div>

    </div>

  </div>

)}




          </div>

          <div className="projects-footer">
            <span>MORE PROJECTS COMING SOON</span>
            <div className="footer-line"></div>
          </div>

        </section>


        {/* SKILLS */}
        <section className="skills-section" id="skills">

          <div className="section-top">
            <span className="section-number">04</span>
            <span className="section-label">EXPERTISE</span>
          </div>

          <div className="skills-heading">
            <h2>
              My creative
              <br />
              <em>toolkit.</em>
            </h2>

            <p>
              Technologies and skills I'm learning and using to turn
              ideas into functional digital experiences.
            </p>
          </div>

          <div className="skills-grid">

            <div className="skill-item">
              <span>01</span>
              <h3>Frontend</h3>
              <p>HTML5 · CSS3 · JavaScript · React · Bootstrap</p>
              <b>↗</b>
            </div>

            <div className="skill-item">
              <span>02</span>
              <h3>Backend</h3>
              <p>Node.js · Express.js · REST APIs</p>
              <b>↗</b>
            </div>

            <div className="skill-item">
              <span>03</span>
              <h3>Database</h3>
              <p>MongoDB · MySQL · Data Management</p>
              <b>↗</b>
            </div>

            <div className="skill-item">
              <span>04</span>
              <h3>Design</h3>
              <p>UI / UX · Responsive Design · Creative Layouts</p>
              <b>↗</b>
            </div>

          </div>

        </section>


        {/* EXPERIENCE */}
    
{/* =========================================================
    EXPERIENCE
========================================================= */}

<section className="experience-section" id="experience">

  <div className="section-top">
    <span className="section-number">05</span>
    <span className="section-label">EXPERIENCE</span>
  </div>


  <div className="experience-heading">

    <h2>
      Learning through
      <br />
      <em>real work.</em>
    </h2>

  </div>


  {/* =======================================================
      EXPERIENCE 01 — ARCH TECH
  ======================================================= */}

  <div className="experience-card">

    <div className="experience-date">
      2026
      <span>— PRESENT</span>
    </div>


    <div className="experience-main">

      <span className="card-label">
        FULL STACK INTERNSHIP
      </span>

      <h3>
        Full Stack Web Development Internship
      </h3>

      <p>
        Currently working as a Full Stack Development Intern at
        Arch Technologies, gaining hands-on experience in
        frontend and backend development while building
        practical web applications and working with modern
        development tools and workflows.
      </p>


      <div className="experience-tags">
        <span>React</span>
        <span>JavaScript</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
        <span>GitHub</span>
      </div>

    </div>

  </div>


  {/* =======================================================
      EXPERIENCE 02 — CODE ALPHA
  ======================================================= */}

  <div className="experience-card">

    <div className="experience-date">
      2026
      <span>INTERNSHIP</span>
    </div>


    <div className="experience-main">

      <span className="card-label">
        FRONT-END DEVELOPMENT
      </span>

      <h3>
        Front-End Development Internship
      </h3>

      <p>
        Completed a Front-End Development Internship with
        Code Alpha, where I worked on practical web development
        tasks and strengthened my skills in HTML, CSS,
        JavaScript, responsive design and creating
        user-friendly web interfaces.
      </p>


      <div className="experience-tags">
        <span>HTML</span>
        <span>CSS</span>
        <span>JavaScript</span>
        <span>Responsive Design</span>
        <span>UI / UX</span>
        <span>GitHub</span>
      </div>


      {/* CERTIFICATE & RECOMMENDATION */}

      <div className="experience-achievements">

        <span>
          ✓ Internship Certificate
        </span>

        <span>
          ✓ Recommendation Letter
        </span>

      </div>

    </div>

  </div>

</section>




        {/* ACHIEVEMENTS */}
        <section className="achievements-section">

          <div className="section-top">
            <span className="section-number">06</span>
            <span className="section-label">ACHIEVEMENTS</span>
          </div>

          <div className="achievement-grid">

            <div className="achievement-card">
              <strong>01</strong>
              <h3>Internship Projects</h3>
              <p>
                Hands-on experience through practical development
                tasks and project-based learning.
              </p>
              <span>↗</span>
            </div>

            <div className="achievement-card featured">
              <strong>02</strong>
              <h3>Web Development</h3>
              <p>
                Creating responsive, modern and user-focused websites
                with attention to design and functionality.
              </p>
              <span>↗</span>
            </div>

            <div className="achievement-card">
              <strong>03</strong>
              <h3>Continuous Learning</h3>
              <p>
                Exploring full stack development, UI/UX and modern
                technologies to grow as a developer.
              </p>
              <span>↗</span>
            </div>

          </div>

        </section>


        {/* TESTIMONIAL / QUOTE */}
        <section className="quote-section">

          <div className="quote-mark">“</div>

          <p>
            Great work starts with curiosity,
            <br />
            creativity and the courage
            <br />
            to keep <em>learning.</em>
          </p>

          <span>— MARWA AFZAL</span>

        </section>


        {/* CONTACT */}
   
{/* =========================================================
    CONTACT SECTION
========================================================= */}

<section className="contact-section" id="contact">

  {/* Decorative elements */}
  <div className="contact-orb contact-orb-one"></div>
  <div className="contact-orb contact-orb-two"></div>


  <div className="contact-container">

    {/* =====================================================
        TOP HEADING
    ===================================================== */}

    <div className="contact-intro">

      <div className="contact-label">
        <span></span>
        LET'S CONNECT
        <span></span>
      </div>

      <h2>
        Let's make something
        <em> unforgettable.</em>
      </h2>

      <p>
        Whether you have a project in mind, a new opportunity,
        or simply want to connect — I'd love to hear from you.
      </p>

    </div>


    {/* =====================================================
        MAIN CONTACT AREA
    ===================================================== */}

    <div className="contact-main">


      {/* ===================================================
          LEFT CONTENT
      =================================================== */}

      <div className="contact-left">

        <div className="contact-eyebrow">
          GET IN TOUCH
        </div>


        <h3>
          Have an idea?
          <br />
          <span>Let's bring it to life.</span>
        </h3>


        <p className="contact-text">
          I'm Marwa Afzal, a Computer Science student and
          aspiring Full Stack Developer who enjoys turning
          ideas into thoughtful, modern and interactive
          digital experiences.
        </p>


        {/* =================================================
            EMAIL CARD
        ================================================= */}

        <a
          href="mailto:afzalamin292@gmail.com"
          className="contact-email-card"
        >

          <div className="email-icon">

            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="currentColor"
                strokeWidth="1.5"
              />

              <path
                d="M4 7L12 13L20 7"
                stroke="currentColor"
                strokeWidth="1.5"
              />

            </svg>

          </div>


          <div className="email-content">

            <small>EMAIL ME</small>

            <strong>
              afzalamin292@gmail.com
            </strong>

          </div>


          <span className="email-arrow">
            ↗
          </span>

        </a>


        {/* =================================================
            SOCIAL AREA
        ================================================= */}

        <div className="contact-social-area">

          <span className="social-heading">
            FIND ME ONLINE
          </span>


          <div className="contact-socials">


            {/* =================================================
                LINKEDIN
            ================================================= */}

            <a
              href="https://www.linkedin.com/in/marwa-afzal-715493398/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >

              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
              >

                <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A2.05 2.05 0 1 0 5.25 7.1 2.05 2.05 0 0 0 5.25 3ZM20.44 13.56c0-3.46-1.84-5.07-4.3-5.07-1.98 0-2.87 1.09-3.36 1.86V8.5H9.4V20h3.38v-5.69c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.71 1.85 3.05V20h3.37l.3-6.44Z" />

              </svg>

            </a>


            {/* =================================================
                GITHUB
            ================================================= */}

            <a
              href="https://github.com/hayaarsh-8"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >

              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
              >

                <path d="M12 .7A11.3 11.3 0 0 0 8.43 22.9c.57.1.78-.25.78-.55v-2.12c-3.18.69-3.85-1.53-3.85-1.53-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.54-.29-5.2-1.27-5.2-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .96-.31 3.12 1.17a10.8 10.8 0 0 1 5.68 0c2.16-1.48 3.12-1.17 3.12-1.17.62 1.58.23 2.74.11 3.03.73.8 1.18 1.82 1.18 3.07 0 4.4-2.67 5.36-5.21 5.64.41.35.77 1.04.77 2.1v3.11c0 .3.21.66.79.55A11.3 11.3 0 0 0 12 .7Z" />

              </svg>

            </a>


            {/* =================================================
                EMAIL
            ================================================= */}

            <a
              href="mailto:afzalamin292@gmail.com"
              aria-label="Email"
              className="social-icon"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
              >

                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

                <path
                  d="M4 7L12 13L20 7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />

              </svg>

            </a>

          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT CONTACT FORM
      ===================================================== */}

      <div className="contact-card">

        <div className="contact-card-top">

          <div>
            <h3>
              Send a message
            </h3>
          </div>

          <div className="card-number">
            07
          </div>

        </div>


        <p className="form-description">
          Tell me a little about yourself and what you'd like
          to build. I'll get back to you soon.
        </p>


        {/* =================================================
            CONTACT FORM
        ================================================= */}

        <form
          className="contact-form"
          onSubmit={async (e) => {

            e.preventDefault();

            const formData = {
              name: e.target.name.value,
              email: e.target.email.value,
              message: e.target.message.value,
            };


            try {

              const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                  method: "POST",

                  headers: {
                    "Content-Type": "application/json",
                  },

                  body: JSON.stringify(formData),
                }
              );


              const data = await response.json();


              if (response.ok) {

                alert(data.message);

                e.target.reset();

              } else {

                alert(data.message);

              }


            } catch (error) {

              console.error(
                "CONTACT ERROR:",
                error
              );

              alert(
                "Unable to send message."
              );

            }

          }}
        >


          {/* NAME */}

          <div className="contact-field">

            <label htmlFor="name">
              
            </label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              required
            />

          </div>


          {/* EMAIL */}

          <div className="contact-field">

            <label htmlFor="email">
              
            </label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />

          </div>


          {/* MESSAGE */}

          <div className="contact-field">

            <label htmlFor="message">
              
            </label>

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your idea..."
              required
            ></textarea>

          </div>


          {/* SEND BUTTON */}

          <button
            type="submit"
            className="gold-contact-button"
          >

            <span>
              SEND MESSAGE
            </span>

            <strong>
              ↗
            </strong>

          </button>


        </form>

      </div>

    </div>


    {/* =====================================================
        BOTTOM LINE
    ===================================================== */}

    <div className="contact-bottom">

      <span>
        MARWA AFZAL
      </span>

      <div className="bottom-line"></div>

      <span>
        STRATEGY • CREATIVITY • TECHNOLOGY
      </span>

    </div>

  </div>

</section>



      </main>


      {/* FOOTER */}
      <footer>

        <span>
          © 2026 MARWA AFZAL
        </span>

        <span>
          CODE · CREATIVITY · PURPOSE
        </span>

        <a href="#home">
          BACK TO TOP ↑
        </a>

      </footer>

    </div>
  );
}

export default App;