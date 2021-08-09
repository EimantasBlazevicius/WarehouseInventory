import React from "react";
import { useTranslation } from "react-i18next";
import placeholder480 from "../../../images/placeholder480.png";

export interface ProductDetailsProps {
  name: string;
  ean: string;
  type: string;
  weight: string;
  quantity: number;
  price: number;
  color: string;
  active: boolean;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  ean,
  type,
  weight,
  quantity,
  price,
  color,
  active,
}) => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <div className="row mt-3">
        <div className="offset-1 col-4">
          <img
            src={placeholder480}
            style={{ border: "1px solid #000000" }}
            alt="nothing to show"
          />
        </div>
        <div className="offset-1 col-5 mt-4">
          <h1 className="display-5">{name}</h1>
          <p className="text-muted">
            {t("columns.ean")}: {ean}
          </p>
          {t("columns.price")}
          <h3 style={{ color: "red" }}>${price}</h3>
          <p>Details</p>
          <p>
            {t("columns.type")}: {type}, {t("columns.weight")}: {weight},{" "}
            {t("columns.color")}: {color}
          </p>
          <p>
            {t("stock.currently")}{" "}
            {quantity !== 0
              ? quantity + t("stock.instock")
              : t("stock.outstock")}
          </p>
          <p>{active && t("productActive")}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetails;
