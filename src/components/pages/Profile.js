import React from "react";
import "./css/ProfilePage.css";
import happyGuy from "../banners/images/happyGuy.png";

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>My Profile</h1>
      <img src={happyGuy} alt="Profile Picture" className="profile-picture" />

      <p>Name: John Doe</p>
      <p>Location: San Francisco, CA</p>
      <h2>My Orders</h2>
      <table className="orders-table">
        <tr>
          <th>Order Number</th>
          <th>Date</th>
          <th>Total</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>12345</td>
          <td>January 1, 2021</td>
          <td>$50.00</td>
          <td>Shipped</td>
        </tr>
        <tr>
          <td>23456</td>
          <td>January 15, 2021</td>
          <td>$75.00</td>
          <td>Delivered</td>
        </tr>
      </table>
    </div>
  );
};

export default Profile;
