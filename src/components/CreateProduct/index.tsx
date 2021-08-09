import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import ProductsContext from "../../context/ProductsContext";
import { useTranslation } from "react-i18next";
import Alert from "../commmon/Alert";

const CreateProduct: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [ean, setEan] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);

  const { t } = useTranslation();
  let history = useHistory();

  const { createProduct } = useContext(ProductsContext);

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  function handleSubmit(): void {
    if (
      createProduct(
        name,
        ean,
        type,
        weight,
        color,
        [quantity],
        [{ amount: price, date }]
      )
    ) {
      setAlert(true);
      const alertInterval = setInterval(() => {
        setAlert(false);
        clearInterval(alertInterval);
        history.push("/products");
      }, 4000);
    } else {
      console.log("Bad");
    }
  }

  function handleSubmitFake(): void {
    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }
    if (
      createProduct(
        "TestProduct",
        getRandomInt(999999).toString(),
        "type",
        "weight",
        "color",
        [16],
        [{ amount: 4, date }]
      )
    ) {
      console.log("Good");
    } else {
      console.log("Bad");
    }
  }

  return (
    <React.Component>
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

        <button
          type="button"
          className="btn btn-primary"
          onClick={() => handleSubmit()}
        >
          {t("buttons.create")}
        </button>

        <button
          type="button"
          className="btn ms-2 btn-primary"
          onClick={() => handleSubmitFake()}
        >
          {t("buttons.createFake")}
        </button>
      </form>

      <Alert
        type="success"
        message="Creation was successful, go back to"
        visible={alert}
      />
    </React.Component>
  );
};

export default CreateProduct;
