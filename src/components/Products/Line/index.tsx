import React, { useState } from "react";
import Button from "../../commmon/Button";

export interface LineProps {}

const Line: React.FC<LineProps> = () => {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <tr>
      <th>Cucumber</th>
      <td>1234567891234</td>
      <td>Vegetable</td>
      <td>1.3kg</td>
      <td>Red'ish</td>
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
        <Button type="primary" text="Edit" />
        <Button type="info" text="Info" />
        <Button type="danger" text="Delete" />
      </td>
    </tr>
  );
};

export default Line;
