import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ProductInterface } from "../../../App";
import ProductsContext from "../../../context/ProductsContext";

export interface FormProps {
  handleSubmit?: Function;
  handleSubmitFake?: Function;
  handleUpdate?: Function;
  formType: string;
  id?: string;
}

const Form: React.FC<FormProps> = ({
  handleSubmit,
  handleSubmitFake,
  handleUpdate,
  formType,
  id,
}) => {
  const [name, setName] = useState<string>("");
  const [ean, setEan] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [active, setActive] = useState<boolean>(true);

  const { t } = useTranslation();

  const { products } = useContext(ProductsContext);

  useEffect((): void => {
    try {
      const theProduct = products.filter(
        (product: ProductInterface) => product.ean === id
      );
      setName(theProduct[0].name);
      setEan(theProduct[0].ean);
      setType(theProduct[0].type);
      setWeight(theProduct[0].weight);
      setQuantity(theProduct[0].quantity[theProduct[0].quantity.length - 1]);
      setPrice(theProduct[0].price[theProduct[0].price.length - 1].amount);
      setColor(theProduct[0].color);
      setActive(theProduct[0].active);
    } catch {
      console.log("Could not mount the product");
    }
  }, []);

  return (
    <form>
      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="productName" className="form-label">
            {t("form.name")}
          </label>
          <input
            value={name}
            type="text"
            className="form-control"
            id="productName"
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
              setName(ev.target.value)
            }
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="EAN" className="form-label">
            {t("form.ean")}
          </label>
          <input
            value={ean}
            type="text"
            className="form-control"
            id="EAN"
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
              setEan(ev.target.value)
            }
          />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="typeName" className="form-label">
            {t("form.type")}
          </label>
          <input
            value={type}
            type="text"
            className="form-control"
            id="typeName"
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
              setType(ev.target.value)
            }
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="weightName" className="form-label">
            {t("form.weight")}
          </label>
          <input
            value={weight}
            type="text"
            className="form-control"
            id="weightName"
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
              setWeight(ev.target.value)
            }
          />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="typeName" className="form-label">
            {t("form.quantity")}
          </label>
          <input
            value={quantity}
            type="number"
            step=".01"
            className="form-control"
            id="typeName"
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
              setQuantity(parseFloat(ev.target.value))
            }
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="weightName" className="form-label">
            {t("form.price")}
          </label>
          <input
            value={price}
            type="number"
            step=".01"
            className="form-control"
            id="weightName"
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
              setPrice(parseFloat(ev.target.value))
            }
          />
        </div>
      </div>
      <div className="row">
        <div className="mb-3 col-6">
          <label htmlFor="colorName" className="form-label">
            {t("form.color")}
          </label>
          <input
            value={color}
            type="text"
            className="form-control"
            id="colorName"
            onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
              setColor(ev.target.value)
            }
          />
        </div>
      </div>
      {formType === "submit" ? (
        <>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() =>
              handleSubmit &&
              handleSubmit(name, ean, type, weight, color, quantity, price)
            }
          >
            {t("buttons.create")}
          </button>

          <button
            type="button"
            className="btn ms-2 btn-primary"
            onClick={() => handleSubmitFake && handleSubmitFake()}
          >
            {t("buttons.createFake")}
          </button>
        </>
      ) : (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() =>
            handleUpdate &&
            handleUpdate(
              name,
              ean,
              type,
              weight,
              color,
              quantity,
              price,
              active
            )
          }
        >
          {t("buttons.update")}
        </button>
      )}
    </form>
  );
};

export default Form;
