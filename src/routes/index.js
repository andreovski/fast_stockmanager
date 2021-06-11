import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import CreateProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/addproduct" component={CreateProduct} />
      <Route path="/editproduct/:id" component={EditProduct} />
    </Switch>
  );
}
