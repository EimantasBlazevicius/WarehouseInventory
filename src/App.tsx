import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import bootstrap from "bootstrap";
import Products from "./components/Products";
import Product from "./components/Product";
import EditProduct from "./components/EditProduct";
import CreateProduct from "./components/CreateProduct";

const App: React.FC = () => {
  return (
    <>
      <h1>Header to be added</h1>
      <Switch>
        <Route path="/products/:id/edit">
          <EditProduct />
        </Route>
        <Route path="/products/create">
          <CreateProduct />
        </Route>
        <Route path="/products/:id">
          <Product />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/" exact>
          <Products />
        </Route>
      </Switch>
      <h1>Footer to be added</h1>
    </>
  );
};

export default App;
