import React, { useState, useContext } from "react";
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
  const { updateProduct } = useContext(ProductsContext);

  function handleCheckbox(): void {
    const newVersion = product;
    newVersion.active = !checked;
    updateProduct(newVersion);
    setChecked(!checked);
  }

  return (
    <tr>
      <th>{product.name}</th>
      <td>{product.ean}</td>
      <td>{product.type}</td>
      <td>{product.weight}</td>
      <td>{product.quantity}</td>
      <td>{product.price}</td>
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
