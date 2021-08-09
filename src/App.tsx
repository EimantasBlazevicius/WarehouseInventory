import React, { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import ProductsContext from "./context/ProductsContext";
import Products from "./components/Products";
import Product from "./components/Product";
import EditProduct from "./components/EditProduct";
import CreateProduct from "./components/CreateProduct";
import Navigation from "./components/Navigation";
import Breadcrumb from "./components/Breadcrumb";

export interface PriceInterface {
  amount: number;
  date: string;
}
export interface ProductInterface {
  name: string;
  ean: string;
  type: string;
  weight: string;
  quantity: number[];
  price: PriceInterface[];
  color: string;
  active: boolean;
}

const App: React.FC = () => {
  const [path, setPath] = useState<string>("/products");

  const location = useLocation();

  const [products, setProducts] = useLocalStorage("products", [
    {
      name: "",
      ean: "",
      type: "",
      weight: "",
      color: "",
      quantity: [0],
      price: [{ amount: 0, date: "" }],
      active: true,
    },
  ]);

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  function createProduct(
    name: string,
    ean: string,
    type: string,
    weight: string,
    color: string,
    quantity: number[],
    price: PriceInterface[]
  ): boolean {
    const newProduct: ProductInterface = {
      name: name,
      ean: ean,
      type: type,
      weight: weight,
      color: color,
      quantity: [...quantity],
      price: [...price],
      active: true,
    };
    try {
      setProducts([...products, newProduct]);

      return true;
    } catch {
      return false;
    }
  }

  function deleteProduct(ean: string): boolean {
    const newProducts = products.filter((product) => product.ean !== ean);

    try {
      setProducts(newProducts);

      return true;
    } catch {
      return false;
    }
  }

  function updateProduct(newVersion: ProductInterface): boolean {
    const currentProduct = products.filter(
      (product) => product.ean === newVersion.ean
    );
    if (JSON.stringify(currentProduct) !== JSON.stringify(newVersion)) {
      const indexToUpdate = products.findIndex(
        (product) => product.ean === newVersion.ean
      );
      let result = products;

      result[indexToUpdate] = newVersion;
      console.log(result);
      setProducts(result);
      return true;
    }

    return false;
  }

  return (
    <ProductsContext.Provider
      value={{
        createProduct,
        deleteProduct,
        products,
        setProducts,
        updateProduct,
        date,
        setPath,
      }}
    >
      <Navigation />
      <Breadcrumb path={path} />
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
    </ProductsContext.Provider>
  );
};

export default App;
