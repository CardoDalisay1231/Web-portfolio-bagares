import React, { useState } from "react";
import './Nav.css';

function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false); // State to track if the navbar is open

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle the state
  };

  const closeNav = () => {
    setIsNavOpen(false); // Close the navbar when a link is clicked
  };

  return (
    <div>
      <input
        type="checkbox"
        id="active"
        checked={isNavOpen} // Bind to the state
        onChange={toggleNav} // Toggle the navbar on change
      />
      <label htmlFor="active" className="menu-btn">
        <i className="fas fa-bars" />
      </label>

      <div className={`wrapper ${isNavOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#profile" onClick={closeNav}>Profile</a></li>
          <li><a href="#about" onClick={closeNav}>About</a></li>
          <li><a href="#projects" onClick={closeNav}>Project</a></li>
          <li><a href="#contact" onClick={closeNav}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
