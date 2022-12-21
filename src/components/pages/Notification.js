import React from "react";
import "./css/notification.css";
const Notification = () => {
  return (
    <div className="notification-container">
      <h1>Notifications</h1>
      <div className="notification-list">
        <div className="notification">
          <h2>Order Confirmation</h2>
          <p>Your order #12345 has been confirmed and will be shipped soon.</p>
          <p>Thank you for shopping with us!</p>
        </div>
        <div className="notification">
          <h2>Order Shipped</h2>
          <p>Your order #12345 has shipped and is on its way to you.</p>
          <p>
            Track your order: <a href="#">Link</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
