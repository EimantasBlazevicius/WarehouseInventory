import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductsContext from "../../../context/ProductsContext";
export interface ButtonProps {
  type: string;
  text: string;
  ean: string;
}

const Button: React.FC<ButtonProps> = ({ type, text, ean }) => {
  const { deleteProduct } = useContext(ProductsContext);
  const buttonClasses = "text-light ms-1 btn btn-" + type;
  if (type === "danger") {
    return (
      <button className={buttonClasses} onClick={() => deleteProduct(ean)}>
        {text}
      </button>
    );
  }

  if (type === "info") {
    const destination = "/products/" + ean;
    return (
      <Link style={{ textDecoration: "none" }} to={destination}>
        <button className={buttonClasses}>{text}</button>
      </Link>
    );
  }

  if (type === "primary") {
    const destination = "/products/" + ean + "/edit";
    return (
      <Link style={{ textDecoration: "none" }} to={destination}>
        <button className={buttonClasses}>{text}</button>
      </Link>
    );
  }
  return <button className={buttonClasses}>{text}</button>;
};

export default Button;
