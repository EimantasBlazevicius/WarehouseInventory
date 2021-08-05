import { useParams } from "react-router-dom";

export interface ProductProps {}

const Product: React.FC<ProductProps> = () => {
  const { id } = useParams<{ id: string }>();
  return <h1>ProductPage {id}</h1>;
};

export default Product;
