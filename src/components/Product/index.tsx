import { useParams } from "react-router-dom";

import React, { useState, useContext, useEffect } from "react";
import ProductsContext from "../../context/ProductsContext";
import ProductDetails from "./ProductDetails";
import Charts from "./Charts";

export interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  const [name, setName] = useState<string>("");
  const [ean, setEan] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<number>(0);
  const { products } = useContext(ProductsContext);
  const [prices, setPrices] = useState<number[]>([]);
  const [quantities, setQuantities] = useState<number[]>([]);

  useEffect((): void => {
    try {
      const theProduct = products.filter(
        (product: { ean: string }) => product.ean === id
      );
      setName(theProduct[0].name);
      setEan(theProduct[0].ean);
      setType(theProduct[0].type);
      setWeight(theProduct[0].weight);
      setQuantity(theProduct[0].quantity[theProduct[0].quantity.length - 1]);
      setPrice(theProduct[0].price[theProduct[0].price.length - 1]);
      setColor(theProduct[0].color);
      setActive(theProduct[0].active);
      setPrices([...theProduct[0].price]);
      setQuantities([...theProduct[0].quantity]);
    } catch {
      console.log("Could not mount the product");
    }
  }, []);

  function handleTabSwitch(tab: number) {
    setActiveTab(tab);
  }

  const { id } = useParams<{ id: string }>();
  return (
    <>
      <div>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className={activeTab === 0 ? "nav-link active" : "nav-link"}
              type="button"
              onClick={() => handleTabSwitch(0)}
            >
              Product Details
            </button>
            <button
              className={activeTab === 1 ? "nav-link active" : "nav-link"}
              type="button"
              onClick={() => handleTabSwitch(1)}
            >
              Price History
            </button>
            <button
              className={activeTab === 2 ? "nav-link active" : "nav-link"}
              type="button"
              onClick={() => handleTabSwitch(2)}
            >
              Quantity History
            </button>
          </div>
        </nav>
        <div className="tab-content">
          <div
            className={
              activeTab === 0 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <ProductDetails
              name={name}
              ean={ean}
              type={type}
              weight={weight}
              quantity={quantity}
              price={price}
              color={color}
              active={active}
            />
          </div>
          <div
            className={
              activeTab === 1 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <Charts prices={prices} label="Prices History" />
          </div>
          <div
            className={
              activeTab === 2 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <Charts prices={quantities} label="Quantity History" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
