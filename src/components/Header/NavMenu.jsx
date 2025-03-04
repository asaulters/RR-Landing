import React from 'react';
import useAnalytics from '../../hooks/useAnalytics';

const NavMenu = ({ isOpen, onClose }) => {
  const { trackNavigation } = useAnalytics();

  const handleNavClick = (section) => {
    trackNavigation(section);
    onClose();
  };
  return (
    <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
      <a href="#hero" onClick={() => handleNavClick('Home')}>Home</a>
      <a href="#about" onClick={() => handleNavClick('Our Story')}>Our Story</a>
      <a href="#about" onClick={() => handleNavClick('How It Works')}>How It Works</a>
      <a href="#contact" onClick={() => handleNavClick('Get Started')}>Get Started</a>
    </nav>
  );
};

export default NavMenu;
