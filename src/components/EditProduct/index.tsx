import { useParams } from "react-router-dom";

export interface EditProductProps {}

const EditProduct: React.FC<EditProductProps> = () => {
  const { id } = useParams<{ id: string }>();
  return <h1>Edit product id: {id}</h1>;
};

export default EditProduct;
