import React, { useState, useContext } from "react";
import Button from "../../commmon/Button";
import ProductsContext from "../../../context/ProductsContext";
import { PriceInterface } from "../../../App";

import { useTranslation } from "react-i18next";

export interface LineProps {
  product: {
    name: string;
    ean: string;
    type: string;
    weight: string;
    quantity: number[];
    price: PriceInterface[];
    color: string;
    active: boolean;
  };
}

const Line: React.FC<LineProps> = ({ product }) => {
  const [checked, setChecked] = useState<boolean>(product.active);
  const [quantity, setQuantity] = useState<number>(
    product.quantity[product.quantity.length - 1]
  );
  const [price, setPrice] = useState<number>(
    product.price[product.price.length - 1].amount
  );

  const { t } = useTranslation();

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const { updateProduct } = useContext(ProductsContext);

  const ZeroQuantityClass = quantity === 0 ? "table-secondary" : "";

  function handleCheckbox(): void {
    const newVersion = product;
    newVersion.active = !checked;
    updateProduct(newVersion);
    setChecked(!checked);
  }

  function handleQuantityChange(event: number): void {
    const newVersion = product;
    newVersion.quantity = [...product.quantity, event];
    updateProduct(newVersion);
  }

  function handlePriceChange(event: number): void {
    let newVersion = product;
    newVersion.price = [...product.price, { amount: event, date }];
    updateProduct(newVersion);
  }
  if (product.ean === "") {
    return <React.Fragment></React.Fragment>;
  } else {
    return (
      <React.Fragment>
        <tr className={ZeroQuantityClass}>
          <th>{product.name}</th>
          <td>{product.ean}</td>
          <td>{product.type}</td>
          <td>{product.weight}</td>
          <td>
            <input
              type="number"
              step=".01"
              value={quantity}
              onBlur={(ev: React.FocusEvent<HTMLInputElement>): void =>
                handleQuantityChange(parseFloat(ev.target.value))
              }
              onChange={(ev: React.FocusEvent<HTMLInputElement>): void =>
                setQuantity(parseFloat(ev.target.value))
              }
            />
          </td>
          <td>
            <input
              type="number"
              step=".01"
              value={price}
              onBlur={(ev: React.FocusEvent<HTMLInputElement>): void =>
                handlePriceChange(parseFloat(ev.target.value))
              }
              onChange={(ev: React.FocusEvent<HTMLInputElement>): void =>
                setPrice(parseFloat(ev.target.value))
              }
            />
          </td>
          <td>{product.color}</td>
          <td>
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => handleCheckbox()}
            />
          </td>
          <td>
            <Button type="info" text={t("buttons.view")} ean={product.ean} />
            <Button type="primary" text={t("buttons.edit")} ean={product.ean} />
            <Button
              type="danger"
              text={t("buttons.delete")}
              ean={product.ean}
            />
          </td>
        </tr>
      </React.Fragment>
    );
  }
};

export default Line;
