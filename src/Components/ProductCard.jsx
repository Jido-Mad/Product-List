import AddBtn from "./AddBtn.jsx";
import { useState, useEffect } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleSize);

    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  function getImage() {
    if (windowWidth < 640) return product.image.mobile;
    if (windowWidth < 1024) return product.image.tablet;
    return product.image.desktop;
  }

  return (
    <div className="my-6">
      <div className="relative max-w-[400px]">
        <AddBtn addToCart={() => addToCart(product)} />
        <img
          src={getImage()}
          alt={product.name}
          className="rounded-lg mb-10 select-none"
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
