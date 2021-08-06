import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
// import bootstrap from "bootstrap";
import Products from "./components/Products";
import Product from "./components/Product";
import EditProduct from "./components/EditProduct";
import CreateProduct from "./components/CreateProduct";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="row">
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
      </div>
      <Footer />
    </>
  );
};

export default App;
