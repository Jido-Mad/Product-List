function EmptyCart() {
  return (
    <div className="bg-white flex flex-col justify-center rounded-lg items-center w-[90%] sm:w-90 pb-6 my-6 lg:mr-4">
      <div className="w-full">
        <h1 className=" flex justify-start font-redhatbold text-[hsl(14,86%,42%)] text-xl text-left p-4 mb-8">
          Your Cart (0)
        </h1>
      </div>
      <img
        src="./illustration-empty-cart.svg"
        alt="cake image"
        className="w-28 h-28 mb-2"
      />
      <p className=" font-redhatsemibold text-center text-[11px] text-[hsl(12,20%,44%)]">
        Your added items will appear here
      </p>
    </div>
  );
}

export default EmptyCart;
