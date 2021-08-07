import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export interface NavigationProps {}

const Navigation: React.FC<NavigationProps> = () => {
  const { t, i18n } = useTranslation();

  function handleLanguageChange(language: string): void {
    i18n.changeLanguage(language);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          {t("menu.title")}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                activeClassName="active"
                to="/products"
              >
                {t("menu.products")}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/products/create"
                activeClassName="active"
              >
                {t("menu.create")}
              </NavLink>
            </li>
            <div className="btn-group ms-4">
              <button
                className="btn btn-primary"
                onClick={() => handleLanguageChange("lt")}
              >
                LT
              </button>
              <button
                className="btn btn-primary"
                onClick={() => handleLanguageChange("en")}
              >
                EN
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
