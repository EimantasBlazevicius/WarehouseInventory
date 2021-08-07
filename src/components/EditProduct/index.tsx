import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router";
import ProductsContext from "../../context/ProductsContext";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Alert from "../commmon/Alert";

export interface updateObjectInterface {
  name: string;
  ean: string;
  type: string;
  weight: string;
  quantity: number;
  price: number;
  color: string;
}

const EditProduct: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [ean, setEan] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [color, setColor] = useState<string>("");
  const [alert, setAlert] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation();
  let history = useHistory();

  const { products, updateProduct } = useContext(ProductsContext);

  function handleUpdate(): void {
    const newVersion: updateObjectInterface = {
      name,
      ean,
      type,
      weight,
      quantity,
      price,
      color,
    };
    if (updateProduct(newVersion)) {
      setAlert(true);
      const alertInterval = setInterval(() => {
        setAlert(false);
        clearInterval(alertInterval);
        history.push("/products");
      }, 4000);
    }
  }

  useEffect((): void => {
    try {
      const theProduct = products.filter(
        (product: { ean: string }) => product.ean === id
      );
      setName(theProduct[0].name);
      setEan(theProduct[0].ean);
      setType(theProduct[0].type);
      setWeight(theProduct[0].weight);
      setQuantity(theProduct[0].quantity[theProduct[0].quantity.length - 1]);
      setPrice(theProduct[0].price[theProduct[0].price.length - 1]);
      setColor(theProduct[0].color);
    } catch {
      console.log("Could not mount the product");
    }
  }, []);

  return (
    <>
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
          onClick={() => handleUpdate()}
        >
          {t("buttons.update")}
        </button>
      </form>
      <Alert
        type="success"
        message="Edit was successful, go back to"
        visible={alert}
      />
    </>
  );
};

export default EditProduct;
