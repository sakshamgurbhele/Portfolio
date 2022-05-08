import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <>
      <nav className="test">
        <div className="logo">
        <a href="">Saksham</a> 
        </div>
        
        <ul>
          <li>
            <a href="#work"> 💼 Work</a>
          </li>
          <li>
            <a href="#about"> ↗️ About</a>
          </li>
          <li>
            <a href="#contact"> 👥 Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default navbar;
