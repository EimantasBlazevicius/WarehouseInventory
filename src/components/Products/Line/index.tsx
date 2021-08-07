import React, { useState, useContext } from "react";
import Button from "../../commmon/Button";
import ProductsContext from "../../../context/ProductsContext";

import { useTranslation } from "react-i18next";

export interface LineProps {
  product: {
    name: string;
    ean: string;
    type: string;
    weight: string;
    quantity: number[];
    price: number[];
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
    product.price[product.price.length - 1]
  );

  const { updateProduct } = useContext(ProductsContext);
  const ZeroQuantityClass = product.quantity[-1] === 0 ? "table-secondary" : "";
  const { t } = useTranslation();

  function handleCheckbox(): void {
    const newVersion = product;
    newVersion.active = !checked;
    updateProduct(newVersion);
    setChecked(!checked);
  }

  function handleQuantityChange(event: number) {
    const newVersion = product;
    newVersion.quantity = [...product.quantity, event];
    updateProduct(newVersion);
  }

  function handlePriceChange(event: number) {
    const newVersion = product;
    newVersion.price = [...product.price, event];
    updateProduct(newVersion);
    console.log(newVersion);
  }

  return (
    <tr className={ZeroQuantityClass}>
      <th>{product.name}</th>
      <td>{product.ean}</td>
      <td>{product.type}</td>
      <td>{product.weight}</td>
      <td>
        <input
          type="number"
          value={quantity}
          onBlur={(ev: React.FocusEvent<HTMLInputElement>): void =>
            handleQuantityChange(parseInt(ev.target.value))
          }
          onChange={(ev: React.FocusEvent<HTMLInputElement>): void =>
            setQuantity(parseInt(ev.target.value))
          }
        />
      </td>
      <td>
        <input
          type="number"
          value={price}
          onBlur={(ev: React.FocusEvent<HTMLInputElement>): void =>
            handlePriceChange(parseInt(ev.target.value))
          }
          onChange={(ev: React.FocusEvent<HTMLInputElement>): void =>
            setPrice(parseInt(ev.target.value))
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
        <Button type="danger" text={t("buttons.delete")} ean={product.ean} />
      </td>
    </tr>
  );
};

export default Line;
