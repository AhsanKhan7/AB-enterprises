import React from "react";
import "./header.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Header = () => {
  return (
    <Router>
      <div className="header">
        <nav>
          <div className="front__title">
            <div style={{ marginLeft: "20px" }}>
              <Link className="title" to="/">
                <h1>ABDULLAH ENTERPRISES</h1>
              </Link>
            </div>

            <ul className="nav_links">
              <li className="non">
                <Link to="/product">
                  <span>Products</span>
                </Link>
              </li>
              <li className="non">
                <Link to="/contact">
                  <span>Contact</span>
                </Link>
              </li>

              <li className="non">
                <Link to="/about">
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Router>
  );
};

export default Header;
