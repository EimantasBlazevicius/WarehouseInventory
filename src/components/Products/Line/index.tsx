import React, { useState, useContext, useEffect } from "react";
import Button from "../../commmon/Button";
import ProductsContext from "../../../context/ProductsContext";

export interface LineProps {
  product: {
    name: string;
    ean: string;
    type: string;
    weight: string;
    quantity: number;
    price: number;
    color: string;
    active: boolean;
  };
}

const Line: React.FC<LineProps> = ({ product }) => {
  const [checked, setChecked] = useState<boolean>(product.active);
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const [price, setPrice] = useState<number>(product.price);

  const { updateProduct } = useContext(ProductsContext);
  const ZeroQuantityClass = product.quantity === 0 ? "table-secondary" : "";

  function handleCheckbox(): void {
    const newVersion = product;
    newVersion.active = !checked;
    updateProduct(newVersion);
    setChecked(!checked);
  }

  useEffect(() => {
    const newVersion = product;
    newVersion.quantity = quantity;
    newVersion.price = price;
    updateProduct(newVersion);
  }, [quantity, price]);

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
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            setQuantity(parseInt(ev.target.value))
          }
        />
      </td>
      <td>
        <input
          type="number"
          value={price}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
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
        <Button type="info" text="View" ean={product.ean} />
        <Button type="primary" text="Edit" ean={product.ean} />
        <Button type="danger" text="Delete" ean={product.ean} />
      </td>
    </tr>
  );
};

export default Line;
