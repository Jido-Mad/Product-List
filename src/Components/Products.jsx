import ProductCard from "./ProductCard";

import data from "/data.json";

const Products = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-redhatbold mb-4 text-[hsl(14,65%,9%))]">
        Desserts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.map((product) => (
          <ProductCard
            key={`${product.name}-${product.category}`}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
