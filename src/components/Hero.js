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
                <a href="#!" class="list-icons" title='Facebook'><img src="/Portfolio/icons/feather/facebook.svg" alt="Facebook" /></a>
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