export interface ProductDetailsProps {
  name: string;
  ean: string;
  type: string;
  weight: string;
  quantity: number;
  price: number;
  color: string;
  active: boolean;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  ean,
  type,
  weight,
  quantity,
  price,
  color,
  active,
}) => {
  return (
    <>
      <div>
        <h3>{name}</h3>
        <h3>{ean}</h3>
        <h3>{type}</h3>
        <h3>{weight}</h3>
        <h3>{quantity}</h3>
        <h3>{price}</h3>
        <h3>{color}</h3>
        <h3>{active && "The product is live"}</h3>
      </div>
    </>
  );
};

export default ProductDetails;
