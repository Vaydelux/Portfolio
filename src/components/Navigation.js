import React from "react";
import Observer from "./effects/Observer";

export default function Navigation() {
  const [ref, isVisible] = Observer(0); 
  return ( isVisible ? 
    <section className='nav-sec' ref={ref}>
      <div className='nav-wrap'>
        <div className='nav-container'>
          <a href="/" className='logo'>Echo</a>
          <nav className='nav-links'>
            <a href="#about-sec"><span>About</span></a>
            <a href="/#project-sec"><span>Projects</span></a>
            <a href="/#exp-sec"><span>Experience</span></a>
            <a href="/#contact-sec"><span>Contact</span></a>
          </nav>
        </div>
      </div>
    </section>
    : 
    <section className='nav-sec' ref={ref}>
      <div className='nav-wrap'>
        <div className='nav-container'>
          <a href="/" className='logo'>Echo</a>
          <nav className='nav-links'>
            <a href="#about-sec"><span>About</span></a>
            <a href="/#project-sec"><span>Projects</span></a>
            <a href="/#exp-sec"><span>Experience</span></a>
            <a href="/#contact-sec"><span>Contact</span></a>
          </nav>
        </div>
      </div>
    </section>
  );
}