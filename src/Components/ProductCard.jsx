const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image.desktop} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
