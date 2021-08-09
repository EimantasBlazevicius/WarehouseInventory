import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import ProductsContext from "../../../context/ProductsContext";

export interface AlertProps {
  message: string;
  type: string;
  visible: boolean;
}

const Alert: React.FC<AlertProps> = ({ message, type, visible }) => {
  const { domain } = useContext(ProductsContext);
  const classValue = "alert alert-" + type + " alert-css";
  const classValueHidden = classValue + " d-none";
  if (visible) {
    return (
      <div className={classValue} role="alert">
        {message + " "}
        <Link to={domain + "/products"} className="alert-link">
          products list.
        </Link>
      </div>
    );
  } else {
    return (
      <div className={classValueHidden} role="alert">
        {message + " "}
        <Link to={domain + "/products"} className="alert-link">
          products list.
        </Link>{" "}
        Redirecting in 4 seconds.
      </div>
    );
  }
};

export default Alert;
