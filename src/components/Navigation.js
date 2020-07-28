import React from "react";
import { Link } from "react-router-dom";
import "../components/Navigation.css";

function Navigation() {
  return (
    <header className="navContainer">
      <div className="home">
        <Link to="/">
          <span>Home</span>
        </Link>
      </div>
      <div className="about">
        <Link to="/about">
          <span>About</span>
        </Link>
      </div>
    </header>
  );
}

export default Navigation;
