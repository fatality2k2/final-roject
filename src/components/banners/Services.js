import React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import SomeGuy from "./images/someGuy.png";

const ServiceBanner = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid className="servicesBorder" xs={8}>
          <p className="servicesText">
            PROVIDING SERVICES <br />
            AT YOUR DOOR
          </p>
          <p className="servicesAltText">
            MACC Essentials has an important role in making
            <br />
            supplies and services available to customers and their <br />
            patients during this critical time. This includes services
            <br />
            from various domains. Our aim is to aid you. As much we
            <br />
            can.
          </p>
          <button>LEARN MORE</button>
        </Grid>
        <Grid className="someGuyImageBox" xs={8}>
          <img
            src={SomeGuy}
            alt="some guy"
            className="someGuyImage"
            style={{ height: "70%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ServiceBanner;
