import React from 'react';
import './About.css';

const About = () => {
  const features = [
    {
      title: "Meaningful Engagement",
      description: "We focus on genuine connection. Our guided questions and intuitive interface encourage seniors to open up, ensuring each story captured feels personal and heartfelt."
    },
    {
      title: "Effortless Accessibility",
      description: "Easy for everyone. Thanks to our simple tablet-based approach, seniors of all tech skill levels can participate. No complicated setups or advanced training required."
    },
    {
      title: "Future-Proof Memories",
      description: "Built to last. Once recorded, stories are safely stored—ready for families to revisit, share, and pass on to future generations."
    }
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2>About Recorded Roots</h2>
          <p>
            We believe every life deserves to be remembered, and every story deserves to be heard.
            At Recorded Roots, our mission is simple yet powerful: we help seniors capture and share 
            the legacy of their lives in a way that's meaningful, accessible, and cherished by 
            generations to come. By merging a user-friendly video recording experience with thoughtful 
            storytelling prompts, we've created a platform where families can preserve the invaluable 
            voices, wisdom, and memories that shape who they are.
          </p>
        </div>

        <div className="about-section">
          <h3>Why We Do It</h3>
          <p>
            Many seniors have extraordinary stories to tell—tales of resilience, love, and triumph 
            that might otherwise be lost in time. Our goal is to provide an easy, welcoming space 
            for them to speak their truth, pass on life lessons, and keep memories alive for their 
            loved ones.
          </p>
        </div>

        <div className="about-section">
          <h3>How It Works</h3>
          <p>
            We bring a simple, photobooth-style setup directly to assisted living facilities or 
            family gatherings. With just a tablet, a ring light, and guided questions, seniors 
            can comfortably record their stories. The result? A heartfelt, timeless keepsake 
            for families to treasure and share with future generations.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
