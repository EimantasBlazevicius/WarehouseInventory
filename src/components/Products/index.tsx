import React, { useContext } from "react";
import ProductsContext from "../../context/ProductsContext";
import Line from "./Line";

export interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">EAN</th>
              <th scope="col">Type</th>
              <th scope="col">Weight</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Color</th>
              <th scope="col">Active</th>
              <th scope="col">Actions</th>
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
