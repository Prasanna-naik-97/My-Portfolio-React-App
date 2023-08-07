import React from "react";
import "./header.scss";


export const Header = () => {
  return (
    <header>
      <nav class="navbar">
        <a href="#">Tech Portfolio</a>

        <ul class="navbar-nav">
          <li>About</li>
          <li>Contact</li>
          <li class="active">View Work</li>
        </ul>
      </nav>
    </header>
  );
};
