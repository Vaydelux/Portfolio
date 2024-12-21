<<<<<<< HEAD
import React, { useState, useEffect } from "react";

const useViewport = () => {
  const [viewport, setViewport] = useState("desktop");

  useEffect(() => {
    const updateViewport = () => {
      const width = window.visualViewport.width; // visual Viewport for accurate on browser devtools
      
      console.log(width);
      if (width < 376) {
        setViewport(width);
      } else if (width >= 376 && width < 768) {
        setViewport(width);
      }
        else if (width >= 768 && width <= 1024) {
        setViewport(width);
      } else {
        setViewport(width);
      }
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return viewport;
};

const Navigation = () => {
  const viewport = useViewport();

  const renderContent = () => {
    
    if (viewport === "SE") { 
      return (
      <section className='nav-sec'>
        <div className='nav-wrap'>
          <div className='nav-container'>
            <a href="/" className='logo'>Echo</a>
            <nav className='nav-links'>
              {viewport}
            </nav>
          </div>
        </div>
      </section>
      );
    }
    else if (viewport === "mobile") { 
      return (
      <section className='nav-sec'>
        <div className='nav-wrap'>
          <div className='nav-container'>
            <a href="/" className='logo'>Echo</a>
            <nav className='nav-links'>
              {viewport}
            </nav>
          </div>
        </div>
      </section>
      );
    } else if (viewport === "tablet") { 
      return (
      <section className='nav-sec'>
        <div className='nav-wrap'>
          <div className='nav-container'>
            <a href="/" className='logo'>Echo</a>
            <nav className='nav-links'>
              <a href="#about-sec"><span>About</span></a>
              <a href="#project-sec"><span>Projects</span></a>
              <a href="#exp-sec"><span>Experience</span></a>
              <a href="#contact-sec"><span>Contact</span></a>
            </nav>
          </div>
        </div>
      </section>
      );
    } else {
      return (
        <section className='nav-sec'>
          <div className='nav-wrap'>
            <div className='nav-container'>
              <a href="/" className='logo'>Echo</a>
              <nav className='nav-links'>
                <a href="#about-sec"><span>About</span></a>
                <a href="#project-sec"><span>Projects</span></a>
                <a href="#exp-sec"><span>Experience</span></a>
                <a href="#contact-sec"><span>Contact</span></a>
              </nav>
            </div>
          </div>
        </section>
      );
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default Navigation;
=======
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
            <a href="#project-sec"><span>Projects</span></a>
            <a href="#exp-sec"><span>Experience</span></a>
            <a href="#contact-sec"><span>Contact</span></a>
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
            <a href="#project-sec"><span>Projects</span></a>
            <a href="#exp-sec"><span>Experience</span></a>
            <a href="#contact-sec"><span>Contact</span></a>
          </nav>
        </div>
      </div>
    </section>
  );
}
>>>>>>> parent of 95d4430 (Updates)
