import ProductCard from "./ProductCard";
import data from "/data.json";

const Products = ({ addToCart }) => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-redhatbold mb-4 text-[hsl(14,65%,9%))]">
        Desserts
      </h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map((product) => (
          <ProductCard
            key={`${product.name}-${product.category}`}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
