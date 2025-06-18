import { useState } from "react";
import AddBtn from "./AddBtn.jsx";
// Increment/Decrement icons
import { HiMiniPlus, HiMiniMinus } from "react-icons/hi2";

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
      {count > 0 ? (
        <div className="flex items-center justify-around absolute text-white bottom-[-20px] left-[50%] -translate-x-[50%] w-38 md:w-42 h-10 rounded-3xl  bg-[hsl(14,86%,42%)] border-1  border-[hsl(14,86%,42%)] hover:cursor-default">
          <div onClick={decrement}>
            <HiMiniMinus className="size-[25px] border rounded-full p-0.5 hover:bg-white hover:border-white hover:text-[hsl(14,86%,42%)] hover:cursor-pointer" />
          </div>

          <span className="font-redhatsemibold text-sm">{count}</span>
          <div onClick={increment}>
            <HiMiniPlus className="size-[25px] border rounded-full p-0.5 hover:bg-white hover:border-white hover:text-[hsl(14,86%,42%)] hover:cursor-pointer" />
          </div>
        </div>
      ) : (
        <AddBtn />
      )}
    </>
  );
}

export default QuantityBtn;
