import React from "react";
import "./css/follow.css";

const Follow = () => {
  return (
    <div className="follow-us-container">
      <h1 style={{ marginLeft: "45%" }}>Follow Us</h1>
      <div className="follow-us-options">
        <div className="follow-us-option">
          <h2>Discord</h2>
          <a href="#">Join Our Server</a>
        </div>
        <div className="follow-us-option">
          <h2>Facebook</h2>
          <a href="https://www.facebook.com/malxazi2002">Like Our Page</a>
        </div>
        <div className="follow-us-option">
          <h2>Twitter</h2>
          <a href="#">Follow Us</a>
        </div>
        <div className="follow-us-option">
          <h2>Instagram</h2>
          <a href="#">Follow Us</a>
        </div>
      </div>
    </div>
  );
};

export default Follow;
