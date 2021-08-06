import React, { useContext } from "react";
import ProductsContext from "../../../context/ProductsContext";
export interface ButtonProps {
  type: string;
  text: string;
  ean: string;
}

const Button: React.FC<ButtonProps> = ({ type, text, ean }) => {
  const { deleteProduct } = useContext(ProductsContext);
  const buttonClasses = "ms-1 btn btn-" + type;
  if (type === "danger") {
    return (
      <button className={buttonClasses} onClick={() => deleteProduct(ean)}>
        {text}
      </button>
    );
  }
  return <button className={buttonClasses}>{text}</button>;
};

export default Button;
