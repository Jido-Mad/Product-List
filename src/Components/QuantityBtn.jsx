import { useState } from "react";
import AddBtn from "./AddBtn.jsx";

function QuantityBtn() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div className="flex items-center justify-around absolute text-white bottom-[-20px] left-[50%] -translate-x-[50%] w-38 md:w-42 h-10 rounded-3xl  bg-[hsl(14,86%,42%)] border-1  border-[hsl(14,86%,42%)]  hover:cursor-pointer">
        <div
          onClick={decrement}
          className="h-5 w-5 inline-flex border border-white p-1 rounded-full"
        >
          <img src="./icon-decrement-quantity.svg" alt="Decrement Logo" />
        </div>

        <span className="font-redhatsemibold text-sm">{count}</span>
        <div
          onClick={increment}
          className="h-5 w-5 inline-flex border border-white p-1 rounded-full"
        >
          <img src="./icon-increment-quantity.svg" alt="Increment Logo" />
        </div>
      </div>
    </>
  );
}

export default QuantityBtn;
