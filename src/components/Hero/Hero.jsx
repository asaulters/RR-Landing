import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>Preserve Your Legacy, Share Your Story</h1>
        <p>
          Every senior has a lifetime of wisdom and memories worth preserving.
          We make it easy to capture and share these precious stories for generations to come.
        </p>
        <button 
          className="cta-button"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Start Preserving Memories
        </button>
      </div>
    </section>
  );
};

export default Hero;
