import { useParams } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import ProductsContext from "../../context/ProductsContext";
import ProductDetails from "./ProductDetails";
import { useTranslation } from "react-i18next";
import { PriceInterface } from "../../App";
import Quantity from "./Quantity";
import Price from "./Price";

const Product: React.FC = () => {
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
  const [prices, setPrices] = useState<PriceInterface[]>([]);
  const [quantities, setQuantities] = useState<number[]>([]);

  const { t } = useTranslation();

  const { id } = useParams<{ id: string }>();

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
      setPrice(theProduct[0].price[theProduct[0].price.length - 1].amount);
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

  return (
    <React.Fragment>
      <div>
        <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              className={activeTab === 0 ? "nav-link active" : "nav-link"}
              type="button"
              onClick={() => handleTabSwitch(0)}
            >
              {t("details.productDetails")}
            </button>
            <button
              className={activeTab === 1 ? "nav-link active" : "nav-link"}
              type="button"
              onClick={() => handleTabSwitch(1)}
            >
              {t("details.priceHistory")}
            </button>
            <button
              className={activeTab === 2 ? "nav-link active" : "nav-link"}
              type="button"
              onClick={() => handleTabSwitch(2)}
            >
              {t("details.quantityHistory")}
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
            <Price data={prices} label={t("details.priceHistory")} />
          </div>
          <div
            className={
              activeTab === 2 ? "tab-pane fade show active" : "tab-pane fade"
            }
          >
            <Quantity data={quantities} label={t("details.quantityHistory")} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
