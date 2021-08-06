import React from "react";
import Line from "./Line";
export interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
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
            <Line />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
