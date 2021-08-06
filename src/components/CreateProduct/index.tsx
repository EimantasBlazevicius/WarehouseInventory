import React, { useState, useContext } from "react";
import ProductsContext from "../../context/ProductsContext";

export interface CreateProductProps {}

const CreateProduct: React.FC<CreateProductProps> = () => {
  const [name, setName] = useState<string>("");
  const [ean, setEan] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const { createProduct } = useContext(ProductsContext);

  function handleSubmit() {
    if (createProduct(name, ean, type, weight, color)) {
      console.log("Good");
    } else {
      console.log("Bad");
    }
  }

  return (
    <>
      <form>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="productName" className="form-label">
              Product Name
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
              European Article Number
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
              Type
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
              Weight
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
            <label htmlFor="colorName" className="form-label">
              Color
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
          Create
        </button>
      </form>
    </>
  );
};

export default CreateProduct;
