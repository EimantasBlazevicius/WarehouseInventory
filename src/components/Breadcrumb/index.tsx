import React from "react";
import { Link } from "react-router-dom";

export interface BreadcrumbProps {
  path: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
  const pathList = path.split("/");
  console.log(path);
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {path !== "/" && path !== "/products" ? (
          <li className="breadcrumb-item"></li>
        ) : (
          ""
        )}
        {pathList.forEach((element) => {
          {
            console.log(element);
          }
          <li className="breadcrumb-item">
            <Link to={path}>{element}</Link>
          </li>;
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
