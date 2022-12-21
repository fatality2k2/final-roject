import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../banners/About";
import Bestsellers from "../banners/Bestsellers";
import Essentials from "../banners/Essentials";
import Home from "../banners/Home";
import Cart from "../pages/Cart";
import Follow from "../pages/Follow";
import Notification from "../pages/Notification";
import Profile from "../pages/Profile";
import ItemDetails from "../Itemdetails/ItemDetails";
import Support from "../pages/Support";

const Routespage = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/essentials" component={Essentials} />
        <Route exact path="/bestsellers" component={Bestsellers} />
        <Route exact path="/about" component={About} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/notifications" component={Notification} />
        <Route exact path="/followus" component={Follow} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/support" component={Support} />
        <Route exact path="/item/:id" component={ItemDetails} />
      </Switch>
    </div>
  );
};

export default Routespage;
