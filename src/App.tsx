import React from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ProductsContext from "./context/ProductsContext";
// import bootstrap from "bootstrap";
import Products from "./components/Products";
import Product from "./components/Product";
import EditProduct from "./components/EditProduct";
import CreateProduct from "./components/CreateProduct";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [products, setProducts] = useLocalStorage("products", []);

  function createProduct(
    name: string,
    ean: string,
    type: string,
    weight: string,
    color: string
  ): boolean {
    console.log(name, ean, type, weight, color);
    return true;
  }

  return (
    <ProductsContext.Provider value={{ createProduct: createProduct }}>
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
    </ProductsContext.Provider>
  );
};

export default App;
