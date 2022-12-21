import React from "react";
import "./css/footer.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/support">Contact Us</Link>
        </li>
      </ul>
      <p className="copyright">Copyright 2021 Shopping Site</p>
    </footer>
  );
};

export default Footer;
