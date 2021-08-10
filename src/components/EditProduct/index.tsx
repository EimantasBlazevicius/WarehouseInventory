import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import ProductsContext from "../../context/ProductsContext";
import { useParams } from "react-router-dom";
import Alert from "../commmon/Alert";
import { ProductInterface } from "../../App";
import Form from "../commmon/Form";

const EditProduct: React.FC = () => {
  const [alert, setAlert] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

  let history = useHistory();

  const { products, updateProduct, domain } = useContext(ProductsContext);

  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  function handleUpdate(
    name: string,
    ean: string,
    type: string,
    weight: string,
    color: string,
    quantity: number,
    price: number,
    active: boolean
  ): void {
    const theProduct = products.filter(
      (product: ProductInterface) => product.ean === id
    );
    const newVersion: ProductInterface = {
      name,
      ean,
      type,
      weight,
      color,
      quantity: [...theProduct[0].quantity, quantity],
      price: [...theProduct[0].price, { amount: price, date }],
      active,
    };
    if (updateProduct(newVersion)) {
      setAlert(true);
      const alertInterval = setInterval(() => {
        setAlert(false);
        clearInterval(alertInterval);
        history.push(domain + "/products");
      }, 4000);
    }
  }

  return (
    <React.Fragment>
      <Form formType="update" handleUpdate={handleUpdate} id={id} />
      <Alert
        type="success"
        message="Edit was successful, go back to"
        visible={alert}
      />
    </React.Fragment>
  );
};

export default EditProduct;
