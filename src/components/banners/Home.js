import React from "react";
import BannerForHome from "./BannerForHome";

import Essentials from "./Essentials";

import ServiceBanner from "./Services";

const Home = () => {
  return (
    <div
      className="homepage"
      style={{
        marginTop: "50px",
        marginLeft: "20px",
        padding: "20px",
        backgroundColor: "white",
      }}
    >
      <ServiceBanner />
      <h2 style={{ marginLeft: "40%" }}>Here is some top selling items</h2>
      <BannerForHome />
      <BannerForHome />
      <Essentials />
    </div>
  );
};

export default Home;
