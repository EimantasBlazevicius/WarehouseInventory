import React, { useState, useContext, useEffect } from "react";
import ProductsContext from "../../context/ProductsContext";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

export interface EditProductProps {}

const EditProduct: React.FC<EditProductProps> = () => {
  const [name, setName] = useState<string>("");
  const [ean, setEan] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [color, setColor] = useState<string>("");

  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation();

  const { products, updateProduct } = useContext(ProductsContext);

  function handleUpdate(): void {
    const newVersion: {
      name: string;
      ean: string;
      type: string;
      weight: string;
      quantity: number;
      price: number;
      color: string;
    } = { name, ean, type, weight, quantity, price, color };
    if (updateProduct(newVersion)) {
      console.log("All Good");
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
      setQuantity(theProduct[0].quantity);
      setPrice(theProduct[0].price);
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
              className="form-control"
              id="typeName"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                setQuantity(parseInt(ev.target.value))
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
              className="form-control"
              id="weightName"
              onChange={(ev: React.ChangeEvent<HTMLInputElement>): void =>
                setPrice(parseInt(ev.target.value))
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
    </>
  );
};

export default EditProduct;
