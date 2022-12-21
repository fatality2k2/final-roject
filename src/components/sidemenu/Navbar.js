import "./sidemenu.css";
import { Link } from "react-router-dom";
import logoImage from "./logo4.PNG";
import { AiFillBell, AiOutlineShoppingCart } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { FaFacebookF, FaInstagram, FaTwitter, FaDiscord } from "react-icons/fa";
import React from "react";
export const Navbar = () => {
  return (
    <div className="all">
      <div className="navcontainer">
        <ul className="uloflins">
          <img className="logo" src={logoImage} alt="logo" />
          <div className="forinput">
            <input className="inputSearch" type={"text"}></input>
          </div>
          <div className="firstSection">
            <li className="profile">
              <Link className="linkstyle" to="/profile">
                Your Profile
              </Link>
              <Link to="/cart">
                <AiOutlineShoppingCart style={{ marginLeft: 20 }} />
              </Link>
            </li>
            <li>
              <Link className="linkstyle" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="linkstyle" to="/essentials">
                Essentials
              </Link>
            </li>
            <li>
              <Link className="linkstyle" to="/bestsellers">
                BestSellers
              </Link>
            </li>
            <li>
              <Link className="linkstyle" to="/about">
                About
              </Link>
            </li>
          </div>

          <div className="secondSection" style={{ marginTop: "3rem" }}>
            <li>
              <Link className="secondSec" to="/notifications">
                <AiFillBell style={{ marginRight: 20 }} />
                Notifications
              </Link>
            </li>
            <li>
              <Link className="secondSec" to="/support">
                <BiSupport style={{ marginRight: 20 }} />
                Support
              </Link>
            </li>
            <li>
              <Link
                className="secondSec"
                to="/followus"
                style={{ cursor: "pointer" }}
              >
                <FaTwitter style={{ cursor: "pointer" }} /> Follow Us
              </Link>
            </li>

            <FaFacebookF
              style={{ cursor: "pointer", marginLeft: 20, marginTop: 20 }}
            />
            <FaInstagram style={{ cursor: "pointer", marginLeft: 10 }} />

            <FaDiscord style={{ cursor: "pointer", marginLeft: 10 }} />
          </div>
        </ul>
      </div>
    </div>
  );
};
