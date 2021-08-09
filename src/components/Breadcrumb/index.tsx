import React from "react";
import { Link } from "react-router-dom";

export interface BreadcrumbProps {
  path: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
  const pathList: string[] = path
    .split("/")
    .filter((path) => path !== "" && path !== "products");
  const lastElement = pathList.pop();

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {path !== "/" && path !== "/products" ? (
          <li className="breadcrumb-item">
            <Link to="/">Products</Link>
          </li>
        ) : (
          <li className="breadcrumb-item">Products</li>
        )}
        {pathList.map((element) => (
          <li className="breadcrumb-item">
            <Link to={path}>{element}</Link>
          </li>
        ))}
        {path !== "/" && path !== "/products" ? (
          <li className="breadcrumb-item active">{lastElement}</li>
        ) : (
          ""
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
