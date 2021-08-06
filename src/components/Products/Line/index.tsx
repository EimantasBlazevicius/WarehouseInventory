import React, { useState } from "react";
import Button from "../../commmon/Button";

export interface LineProps {
  product: {
    name: string;
    ean: string;
    type: string;
    weight: string;
    color: string;
    active: boolean;
  };
}

const Line: React.FC<LineProps> = ({ product }) => {
  const [checked, setChecked] = useState<boolean>(product.active);

  return (
    <tr>
      <th>{product.name}</th>
      <td>{product.ean}</td>
      <td>{product.type}</td>
      <td>{product.weight}</td>
      <td>{product.color}</td>
      <td>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
            setChecked(!checked)
          }
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
