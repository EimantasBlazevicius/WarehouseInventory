import React, { useContext } from "react";
import ProductsContext from "../../context/ProductsContext";
import Line from "./Line";
import { useTranslation } from "react-i18next";

export interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const { t } = useTranslation();
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">{t("columns.name")}</th>
              <th scope="col">{t("columns.ean")}</th>
              <th scope="col">{t("columns.type")}</th>
              <th scope="col">{t("columns.weight")}</th>
              <th scope="col">{t("columns.quantity")}</th>
              <th scope="col">{t("columns.price")}</th>
              <th scope="col">{t("columns.color")}</th>
              <th scope="col">{t("columns.active")}</th>
              <th scope="col">{t("columns.actions")}</th>
            </tr>
          </thead>
          <tbody>
            {products.map(
              (
                product: {
                  name: string;
                  ean: string;
                  type: string;
                  weight: string;
                  quantity: number[];
                  price: number[];
                  color: string;
                  active: boolean;
                },
                index: number
              ) => (
                <Line key={index} product={product} />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
