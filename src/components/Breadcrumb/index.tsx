import React from "react";
import { Link } from "react-router-dom";

export interface BreadcrumbProps {
  path: string;
  domain: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path, domain }) => {
  const pathList: string[] = path
    .split("/")
    .filter(
      (path) =>
        path !== "" && path !== "products" && path !== "WarehouseInventory"
    );
  const lastElement = pathList.pop();

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {path !== domain && path !== domain + "products" ? (
          <li className="breadcrumb-item">
            <Link to={domain}>Products</Link>
          </li>
        ) : (
          <li className="breadcrumb-item"></li>
        )}

        {pathList.map((element) => (
          <li className="breadcrumb-item">
            <Link to={path.split(element)[0] + element}>{element}</Link>
          </li>
        ))}

        {path !== domain && path !== domain + "products" ? (
          <li className="breadcrumb-item active">{lastElement}</li>
        ) : (
          ""
        )}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
