import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../components/home/Home";
import About from "../components/about/about";
import Product from "../components/product/product";
import Contact from "../components/contact/contact";
import Error from "../components/error";

const Rout = (
  <Router>
    <div>
      <Switch>
        <Route path="/" component={Home} exact={true} />

        <Route path="/product" component={Product} />

        <Route path="/about" component={About} />

        <Route path="/contact" component={Contact} />

        {/* <Route component={Error} /> */}
      </Switch>
    </div>
  </Router>
);

export default Rout;
