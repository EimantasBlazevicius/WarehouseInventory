import React, { useContext } from "react";
import ProductsContext from "../../context/ProductsContext";
import Line from "./Line";

export interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const { products, setProducts } = useContext(ProductsContext);
  console.log(products);
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
              <th scope="col">Color</th>
              <th scope="col">Active</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(
              (product: {
                name: string;
                ean: string;
                type: string;
                weight: string;
                color: string;
                active: boolean;
              }) => (
                <Line product={product} />
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
