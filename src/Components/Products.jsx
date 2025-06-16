import ProductCard from "./ProductCard";

import data from "/data.json";

const Products = () => {
  return (
    <div>
      {data.map((product) => (
        <ProductCard
          key={`${product.name}-${product.category}`}
          product={product}
        />
      ))}
    </div>
  );
};

export default Products;
