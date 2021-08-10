import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import ProductsContext from "../../context/ProductsContext";
import Alert from "../commmon/Alert";
import Form from "../commmon/Form";

const CreateProduct: React.FC = () => {
  const [alert, setAlert] = useState<boolean>(false);

  let history = useHistory();

  const { createProduct } = useContext(ProductsContext);

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  function handleSubmit(
    name: string,
    ean: string,
    type: string,
    weight: string,
    color: string,
    quantity: number,
    price: number
  ): void {
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
    <React.Fragment>
      <Form
        formType="submit"
        handleSubmit={handleSubmit}
        handleSubmitFake={handleSubmitFake}
      />

      <Alert
        type="success"
        message="Creation was successful, go back to"
        visible={alert}
      />
    </React.Fragment>
  );
};

export default CreateProduct;
