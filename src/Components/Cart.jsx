function Cart() {
  return (
    <>
      <div className="bg-white flex flex-col justify-center rounded-lg items-center w-85 pl-2 pb-6 lg:mt-6">
        <div className="w-full">
          <h1 className=" flex justify-start font-redhatbold text-[hsl(14,86%,42%)] text-xl text-left p-4 mb-8">
            {" "}
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

      <div className="hidden w-75">
        <h1 className=" flex font-redhatbold rounded-lg text-[hsl(14,86%,42%)] p-4 mb-8 md:text-2xl">
          {" "}
          Your Cart (7)
        </h1>
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <div className="space-y-2 ml-9">
              <p className="font-redhatsemibold text-[12px] text-gray-800">
                Classic Tiramisu
              </p>
              <div className="flex space-x-2">
                <p className="font-redhatbold text-[10px] text-[hsl(14,86%,42%)]">
                  1x
                </p>
                <p className="font-redhatsemibold text-[10px] text-[hsl(7,20%,60%)]">
                  @ $5.50
                </p>
                <p className="font-redhatsemibold text-[10px] text-[hsl(12,20%,44%)]">
                  $5.50
                </p>
              </div>
            </div>
            <div className="w-3 h-3 border-1 border-[hsl(14,25%,72%)] rounded-full flex items-center justify-center">
              <img
                src="./icon-remove-item.svg"
                alt="icon remove item"
                className="w-2 h-2 fill-[hsl(14,65%,9%)]"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-2 ml-9">
              <p className="font-redhatsemibold text-[12px] text-gray-800">
                Vanilla Bean Crème Brûlée
              </p>
              <div className="flex space-x-2">
                <p className="font-redhatbold text-[10px] text-[hsl(14,86%,42%)]">
                  4x
                </p>
                <p className="font-redhatsemibold text-[10px] text-[hsl(7,20%,60%)]">
                  @ $7.00
                </p>
                <p className="font-redhatsemibold text-[10px] text-[hsl(12,20%,44%)]">
                  $28.00
                </p>
              </div>
            </div>
            <div className="w-3 h-3 border-1 border-[hsl(14,25%,72%)] rounded-full flex items-center justify-center">
              <img
                src="./icon-remove-item.svg"
                alt="icon remove item"
                className="w-2 h-2"
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="space-y-2 ml-9">
              <p className="font-redhatsemibold text-[12px] text-gray-800">
                Vanilla Panna Cotta
              </p>
              <div className="flex space-x-2">
                <p className="font-redhatbold text-[10px] text-[hsl(14,86%,42%)]">
                  2x
                </p>
                <p className="font-redhatsemibold text-[10px] text-[hsl(7,20%,60%)]">
                  @ $6.50
                </p>
                <p className="font-redhatsemibold text-[10px] text-[hsl(12,20%,44%)]">
                  $13.00
                </p>
              </div>
            </div>
            <div className="w-3 h-3 border-1 border-[hsl(14,25%,72%)] rounded-full flex items-center justify-center">
              <img
                src="./icon-remove-item.svg"
                alt="icon remove item"
                className="w-2 h-2"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center ml-9 mt-8">
          <h3 className="font-redhatthin text-[12px] text-[hsl(14,65%,9%)]">
            Order Total
          </h3>
          <h1 className="font-redhatbold">$46.50</h1>
        </div>

        <div className="flex ml-9 mt-8 justify-center items-center space-x-2">
          <img
            src="./icon-carbon-neutral.svg"
            alt="icon remove item"
            className="w-4 h-4"
          />
          <p className="font-redhat text-[12px] text-center tracking-wide text-[hsl(12,20%,44%)]">
            This is a{" "}
            <span className="font-redhatsemibold text-[hsl(14,65%,9%)]">
              carbon-neutral
            </span>{" "}
            delivery
          </p>
        </div>

        <button className="flex font-redhatthin justify-center w-65 ml-9 mt-8 rounded-full bg-[hsl(14,86%,42%)] text-white text-center p-3">
          Confirm Order
        </button>
      </div>
    </>
  );
}

export default Cart;
