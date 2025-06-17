import { useState } from "react";
import QuantityBtn from "./QuantityBtn.jsx";

function AddBtn() {
  const [showQuantity, setShowQuantity] = useState(false);

  function handleShowQuantity() {
    setShowQuantity(!showQuantity);
  }

  return (
    <>
      {showQuantity ? (
        <QuantityBtn />
      ) : (
        <div
          onClick={handleShowQuantity}
          className="flex items-center justify-center absolute bottom-[-20px] left-[50%] -translate-x-[50%] w-38 md:w-42 h-10 rounded-3xl bg-white border-1 border-[hsl(12,20%,44%)] hover:border-[hsl(14,86%,42%)] hover:text-[hsl(14,86%,42%)] hover:cursor-pointer"
        >
          <img
            src="./icon-add-to-cart.svg"
            alt="Add to cart logo"
            className="w-5 mr-2"
          />
          <span className="font-redhatsemibold text-sm">Add to Cart</span>
        </div>
      )}
    </>
  );
}

export default AddBtn;
