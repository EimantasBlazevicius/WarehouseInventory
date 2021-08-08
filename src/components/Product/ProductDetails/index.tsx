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
    <>
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
          <p className="text-muted">EAN: {ean}</p>
          <>Price</>
          <h3 style={{ color: "red" }}>${price}</h3>
          <p>Details</p>
          <p>
            Type: {type}, Weight: {weight}, Color: {color}
          </p>
          <p>
            Currently {quantity !== 0 ? quantity + " in stock" : "Out of stock"}
          </p>
          <p>{active && t("productActive")}</p>
        </div>
      </div>

      {/* <h3>{name}</h3>
        <h3>{ean}</h3>
        <h3>{type}</h3>
        <h3>{weight}</h3>
        <h3>{quantity}</h3>
        <h3>{price}</h3>
        <h3>{color}</h3>
        <h3>{active && t("productActive")}</h3> */}
    </>
  );
};

export default ProductDetails;
