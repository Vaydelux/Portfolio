import React from "react";

export default function Hero() {
  return (
    <section className='hero-sec' id="hero-sec">
      <div className='hero-wrap'>
        <div className='hero-container'>
          <div className='hero-intro'>
            <h1 className='intro-greet'>Hi, <span>I am</span></h1>
            <div className="intro-name">
              <div className="intro-text">Jericho Mosqueda</div>
            </div>
            <div className="intro-contact">
              <div className="contact-list">
                <div className="list-title">Socials :</div>
                <div className="icons-container">
                  <a href="https://www.facebook.com/JerichoM16" className="icon" title='Facebook'><i data-feather="facebook"></i></a>
                  <a href="https://github.com/Vaydelux" className="icon" title='Github'><i data-feather="github"></i></a>
                  <a href="https://www.instagram.com/jechom16/" className="icon" title='Instagram'><i data-feather="instagram"></i></a>
                  <a href="https://www.linkedin.com/in/vaydelux/" className="icon" title='LinkedIn'><i data-feather="linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-avatar">
            <div className="hero-img">
              <img src="/Portfolio/assets/images/Echo.jpg" alt="Jericho Mosqueda" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}