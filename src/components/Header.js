import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li className="lines">
            <NavLink to="/" >
              Home
            </NavLink>
          </li>
          <li className="lines">
            <NavLink to="/search">Search</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
