import AddBtn from "./AddBtn.jsx";

const ProductCard = ({ product }) => {
  return (
    <div className="my-6">
      <div className="relative">
        <AddBtn />
        <img
          src={product.image.mobile}
          alt={product.name}
          className="rounded-lg mb-10"
        />
      </div>
      <h3 className="text-sm font-redhatthin text-[hsl(12,20%,44%)]">
        {product.category}
      </h3>
      <p className="font-redhatsemibold text-[hsl(12,20%,15%)]">
        {product.name}
      </p>
      <p className="text-[hsl(14,86%,42%)] font-redhatsemibold">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductCard;
