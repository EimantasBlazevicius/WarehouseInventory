import { useParams } from "react-router-dom";

import React, { useState, useContext, useEffect } from "react";
import ProductsContext from "../../context/ProductsContext";

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
  const { products } = useContext(ProductsContext);
  useEffect((): void => {
    try {
      const theProduct = products.filter(
        (product: { ean: string }) => product.ean === id
      );
      setName(theProduct[0].name);
      setEan(theProduct[0].ean);
      setType(theProduct[0].type);
      setWeight(theProduct[0].weight);
      setQuantity(theProduct[0].quantity);
      setPrice(theProduct[0].price);
      setColor(theProduct[0].color);
      setActive(theProduct[0].active);
    } catch {
      console.log("Could not mount the product");
    }
  }, []);

  const { id } = useParams<{ id: string }>();
  return (
    <>
      <h3>{name}</h3>
      <h3>{ean}</h3>
      <h3>{type}</h3>
      <h3>{weight}</h3>
      <h3>{quantity}</h3>
      <h3>{price}</h3>
      <h3>{color}</h3>
      <h3>{active && "The product is live"}</h3>
    </>
  );
};

export default Product;
