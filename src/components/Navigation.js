import React, { useState, useEffect } from "react";

const useViewport = () => {
  const [viewport, setViewport] = useState("desktop");

  useEffect(() => {
    const updateViewport = () => {
      const width = window.screen.width; // visual Viewport for accurate on browser devtools
      
      console.log(width);
      if (width < 376) {
        setViewport("SE");
      } else if (width >= 376 && width < 768) {
        setViewport("mobile");
      }
        else if (width >= 768 && width <= 1024) {
        setViewport("tablet");
      } else {
        setViewport("desktop");
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
              <div className='nav-dropdown' data-feather="menu"></div>
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
            <div className='nav-dropdown' data-feather="menu"></div>
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
            <div className='nav-dropdown' data-feather="menu"></div>
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