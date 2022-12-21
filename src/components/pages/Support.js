import React from "react";
import "./css/support.css";

const Support = () => {
  return (
    <div className="support-container">
      <h1>Support</h1>
      <div className="support-options">
        <div className="support-option">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions in our FAQ section.</p>
          <a href="#">View FAQ</a>
        </div>
        <div className="support-option">
          <h2>Contact Us</h2>
          <p>Need further assistance? Contact our customer support team.</p>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Support;
