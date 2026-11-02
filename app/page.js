
"use client";

import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showWork, setShowWork] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showApexNotice, setShowApexNotice] = useState(false);
  const [showGalletInfo, setShowGalletInfo] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [catPosition, setCatPosition] = useState(null);

  const posterRef = useRef(null);

useEffect(() => {

  const buttons = document.querySelectorAll("[data-theme-toggle]");

  const handleThemeToggle = () => {
    const poster = document.querySelector(".poster");
    if (!poster) return;

    poster.classList.toggle("dark");
    poster.classList.toggle("light");

    const isDark = poster.classList.contains("dark");

    buttons.forEach((button) => {
      button.textContent = isDark ? "LIGHT ↗" : "DARK ↗";
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", handleThemeToggle);
  });

  return () => {
    buttons.forEach((button) => {
      button.removeEventListener("click", handleThemeToggle);
    });
  };
}, []);

  return (
    <main
      className={`poster ${darkMode ? "dark" : "light"}`}
      ref={posterRef}
    >
      
<header className="topbar">
  <a className="signature" href="#">
    <span className="signature-mark">S—</span>
    <span>
      INDEPENDENT
      <br />
      DIGITAL PRACTICE
    </span>
  </a>

  {/* Desktop navigation */}
  <nav className="navigation desktop-navigation" aria-label="Main navigation">
<a
  href="#work-panel"
  className="navigation-trigger"
>
  WORK
</a>

<a href="#about-panel" className="navigation-trigger">
  ABOUT
</a>

  <div className="contact-wrapper">
  <a href="#desktop-contact-panel" className="contact-trigger">
    CONTACT
  </a>

<div id="desktop-contact-panel" className="contact-popup">
<a
  href="#"
  className="contact-close"
  aria-label="Close contact popup"
>
  ×
</a>

          <span className="contact-label">GET IN TOUCH</span>
          <p>Have a project in mind?</p>
          <span className="contact-email">
            shai.hester.design@gmail.com
          </span>

          <button
            type="button"
            className="copy-email"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(
                  "shai.hester.design@gmail.com"
                );
                setCopiedEmail(true);
              } catch {
                setCopiedEmail(false);
              }
            }}
          >
            {copiedEmail ? "COPIED ✓" : "COPY EMAIL ↗"}
          </button>

</div>
</div>
</nav>

<button
  type="button"
  className="desktop-theme-toggle"
  data-theme-toggle
  aria-label="Toggle dark mode"
>
  {darkMode ? "LIGHT ↗" : "DARK ↗"}
</button>
  
<div className="mobile-header-actions">
  <div className="mobile-menu-container">
    <button
      type="button"
      className="mobile-menu-trigger"
      aria-label="Toggle navigation menu"
      aria-expanded={mobileMenuOpen}
      onClick={() => setMobileMenuOpen((current) => !current)}
    >
      ☰
    </button>

    {mobileMenuOpen && (
      <nav className="mobile-menu" aria-label="Mobile navigation">

<a
  href="#work-panel"
  className="navigation-trigger"
  onClick={() => {
setMobileMenuOpen(false);
  }}
>
 WORK <span className="nav-arrow">↗︎</span>
</a>
<a
  href="#about-panel"
  className="navigation-trigger"
  onClick={() => {
    setMobileMenuOpen(false);
  }}
>
  ABOUT <span className="nav-arrow">↗︎</span>
</a>

<a
  href="#contact-panel"
  className="navigation-trigger"
  onClick={() => {
    setMobileMenuOpen(false);
  }}
>
  CONTACT <span className="nav-arrow">↗︎</span>
</a>

<button
  type="button"
  className="mobile-theme-toggle"
  data-theme-toggle
  onClick={() => setDarkMode((current) => !current)}
>
  {darkMode ? "LIGHT ↗" : "DARK ↗"}

</button>

      </nav>
    )}
  </div>

<div id="contact-panel" className="contact-popup mobile-contact-popup">
<a
  href="#"
  className="contact-close"
  aria-label="Close contact popup"
>
  ×
</a>

      <span className="contact-label">GET IN TOUCH</span>
      <p>Have a project in mind?</p>
      <span className="contact-email">
        shai.hester.design@gmail.com
      </span>

      <button
        type="button"
        className="copy-email"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(
              "shai.hester.design@gmail.com"
            );
            setCopiedEmail(true);
          } catch {
            setCopiedEmail(false);
          }
        }}
      >
        {copiedEmail ? "COPIED ✓" : "COPY EMAIL ↗"}
      </button>
    </div>
  </div>

</header>

      <div id="about-panel" className="about-overlay">
          <section
  className="about-panel"
  role="dialog"
  aria-modal="true"
  aria-labelledby="about-title"
>
            <div className="about-panel-top">
              <span>INTRODUCTION / 002</span>

<a
  href="#"
  className="about-close"
  aria-label="Close About panel"
>
  ×
</a>
            </div>

            <div className="about-panel-content">
              <span className="about-kicker">
                THE PERSON BEHIND THE PIXELS
              </span>

              <h2 id="about-title" className="about-heading">
                ABOUT<span>.</span>
              </h2>

              <p className="about-lead">
                I'm interested in the space where design and technology meet.
              </p>

              <p className="about-description">
            Hi I'm Shai, I enjoy bringing ideas to life through design and development, 
            from brand pages to fully developed websites! I'm interested in 
            creating websites for small businesses and individuals looking 
            to refresh their online presence or make their mark online.
              </p>

              <div className="about-divider" />

              <span className="about-kicker">AREAS OF INTEREST</span>

              <div className="about-skills">
                <span>WEB DESIGN</span>
                <span>DEVELOPMENT</span>
                <span>SHOPIFY / ECOMMERCE</span>
                <span>DIGITAL EXPERIMENTATION</span>
              </div>
            </div>

<button
  type="button"
  className="about-work-button"
  onClick={() => {
    setShowAbout(false);
    setShowWork(true);
  }}
>
  CHECK OUT MY WORK <span>↗</span>
</button>

</section>
</div>

      {/* WORK PANEL */}
<div id="work-panel" className="work-overlay">
  <section
    className="work-panel"
    role="dialog"
    aria-modal="true"
    aria-labelledby="work-title"
  >
    <div className="work-panel-top">
      <span>SELECTED PROJECTS / 001</span>

      <a
        href="#"
        className="work-close"
        aria-label="Close Work panel"
      >
        ×
      </a>
    </div>

    <div className="work-panel-content">
      <span className="work-kicker">A COLLECTION OF CREATIVE IDEAS</span>

      <h2 id="work-title" className="work-heading">
        WORK<span>.</span>
      </h2>

      <p className="work-intro">
        A selection of projects brought to life
        through design and development.
      </p>

      <div className="work-project-list">

        {/* APEX PROJECT */}
        <a
          href="#apex-notice"
          className="work-project"
        >
          <span className="work-project-number">01</span>

          <div className="work-project-info">
            <h3>APEX GYM</h3>
            <p>Unofficial website concept / Web design & development</p>
            <span className="work-project-type">INDEPENDENT CONCEPT</span>
          </div>

          <span className="work-project-arrow">↗</span>
        </a>

        {/* GALLET PROJECT */}
<a
  href="#gallet-notice"
  className="work-project"
>
  <span className="work-project-number">02</span>

  <div className="work-project-info">
    <h3>GALLET</h3>
    <p>Brand page / Shopify & ecommerce</p>
    <span className="work-project-type">PROFESSIONAL EXPERIENCE</span>
  </div>

  <span className="work-project-arrow">↗</span>
</a>

 </div>
    </div>
  </section>
</div>

{/* APEX NOTICE */}
<div id="apex-notice" className="apex-notice-overlay">
  <section
    className="apex-notice-panel"
    role="dialog"
    aria-modal="true"
    aria-labelledby="apex-notice-title"
  >
    <div className="apex-notice-top">
      <span>PROJECT NOTE / 001</span>

      <a
        href="#work-panel"
        className="apex-notice-close"
        aria-label="Close notice"
      >
        ×
      </a>
    </div>

    <div className="apex-notice-content">
      <span className="apex-notice-kicker">BEFORE YOU CONTINUE</span>

      <h2 id="apex-notice-title">
        A NOTE ON
        <br />
        THIS PROJECT<span>.</span>
      </h2>

      <p>
        This is an unofficial website concept created independently
        for portfolio purposes. It is not affiliated with or endorsed
        by The Apex Gym. Third-party imagery and branding belong to
        their respective owners.
      </p>

      <span className="apex-mobile-note">
        psst... the demo is available on mobile too.
      </span>

      <div className="apex-notice-actions">
        <a
          href="https://apex-gym-iota.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="apex-view-demo"
        >
          VIEW DEMO ↗
        </a>

        <a
          href="#work-panel"
          className="apex-go-back"
        >
          GO BACK
        </a>
      </div>
    </div>
  </section>
</div>

{/* GALLET NOTICE */}
<div id="gallet-notice" className="apex-notice-overlay">
  <section
    className="apex-notice-panel"
    role="dialog"
    aria-modal="true"
    aria-labelledby="gallet-info-title"
  >
    <div className="apex-notice-top">
      <span>PROJECT NOTE / 002</span>

      <a
        href="#work-panel"
        className="apex-notice-close"
        aria-label="Close notice"
      >
        ×
      </a>
    </div>

    <div className="apex-notice-content">
      <span className="apex-notice-kicker">PROFESSIONAL EXPERIENCE</span>

      <h2 id="gallet-info-title">
        GALLET<span>.</span>
      </h2>

      <p>
        A Shopify brand-page development project focused on presenting
        Gallet's watch collection and brand heritage through a
        custom-designed experience.
      </p>

      <span className="apex-mobile-note">
        Developed as part of my professional work at Lewis Jewelers.
      </span>

      <div className="apex-notice-actions">
        <a href="#work-panel" className="apex-go-back">
          GO BACK
        </a>
      </div>
    </div>
  </section>
</div>

<section className="poster-art">
        <div className="edition-label">
          <span>FREELANCE WEB DESIGN</span>
          <span>EST. 2026 — PORTFOLIO Nº 001</span>
        </div>

<div className="make-word">
  <span>
    MAK<span data-cat-stop="make">E</span>
  </span>
  <span className="period">.</span>
</div>

        <div className="digital-word">
          <span>
            DIGITA<span data-cat-stop="digital">L</span>
          </span>
          <span className="digital-outline">DIGITAL</span>
        </div>

        <div className="vertical-note">
          <span> MADE WITH CREATIVITY</span>
        </div>

        <div className="different-word" aria-label="DIFFERENT">
  <svg viewBox="0 0 760 220" role="img" aria-label="DIFFERENT">
    {Array.from("DIFFERENT").map((letter, index) => {
      const x = 55 + index * 64;
      const y = 105 + Math.sin((index / 8) * Math.PI * 2) * 28;

      return (
        <g
          key={index}
          transform={`translate(${x}, ${y})`}
          data-cat-stop={index === 8 ? "different" : undefined}
        >
          <text
            className="different-letter"
            textAnchor="middle"
            dominantBaseline="middle"
            fontFamily="Bebas Neue, Impact, sans-serif"
            fontSize="130"
          >
            {letter}
          </text>
        </g>
      );
    })}
  </svg>
</div>

        <div className="purpose-word">
          <span>ON PURPOSE</span>
        </div>

        <div className="cross-mark">✳</div>
        <div className="square-mark" />

        <div className="bottom-left">
          <span>BUILT WITH A VISION.</span>
          <span>DESIGNED WITH PASSION.</span>
        </div>

        <div className="bottom-right">
          <span>DESIGN / DEVELOPMENT</span>
          <span>AVAILABLE FOR SELECT PROJECTS</span>
        </div>

        <div className="poster-index">01 — 03</div>
      </section>

      <div
className="pixel-cat"

aria-label="A little pixel cat"
style={{
  left: catPosition ? `${catPosition.x}px` : "80%",
  top: catPosition ? `${catPosition.y}px` : "75%",
  visibility: "visible",
}}
      >
        <svg
          viewBox="0 0 120 100"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Body */}
          <path
            className="cat-body"
            d="M30 56 H38 V49 H72 V54 H80 V63 H86 V79 H80 V87 H35 V82 H28 V73 H24 V63 H30 Z"
            fill="currentColor"
          />

          {/* Head and pointed ears */}
          <path
            d="M30 44 V29 H35 V15 H43 V23 H50 V27 H65 V23 H72 V15 H80 V29 H85 V44 H80 V52 H74 V57 H40 V52 H35 V48 H30 Z"
            fill="currentColor"
          />

          {/* Inner ears */}
          <path
            d="M39 27 H43 V35 H39 Z M72 35 V27 H76 V35 Z"
            fill="var(--background)"
          />

          {/* Eyes */}
          <rect className="cat-eye" x="43" y="38" width="5" height="6" fill="var(--background)" />
          <rect className="cat-eye" x="67" y="38" width="5" height="6" fill="var(--background)" />

          {/* Nose */}
          <path d="M56 48 H61 V52 H56 Z" fill="var(--background)" />

          {/* Whiskers */}
          <path
            d="M36 48 H20 M36 53 H24 M79 48 H95 M79 53 H91"
            stroke="var(--background)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Front paws */}
          <path
            d="M37 77 H49 V87 H30 V82 H37 Z M59 77 H72 V87 H55 V82 H59 Z"
            fill="currentColor"
          />

          {/* Animated tail */}
          <path
            className="cat-tail"
            d="M78 72 H88 V66 H96 V58 H102 V46 H96 V40 H90 V46 H84 V56 H78 V62 H72"
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            strokeLinejoin="miter"
          />
        </svg>
      </div>

      <footer className="footer">
        <span>CREATIVE DEVELOPMENT</span>
        <span>"WHAT IS NOW PROVED WAS ONCE ONLY IMAGINED." — WILLIAM BLAKE</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}
