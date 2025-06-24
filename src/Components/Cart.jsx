function Cart({ cartItems }) {
  return (
    <>
      <div className="w-75">
        <h1 className="flex font-redhatbold rounded-lg text-[hsl(14,86%,42%)] mb-8 md:text-xl">
          Your Cart ({cartItems.length})
        </h1>
        <div className="flex flex-col gap-5">
          {cartItems.map((item, index) => (
            <div
              key={`${item.name}-${index}`}
              className="flex justify-between items-center"
            >
              <div className="space-y-2">
                <p className="font-redhatsemibold text-[12px] text-gray-800">
                  {item.name}
                </p>
                <div className="flex space-x-2">
                  <p className="font-redhatbold text-[10px] text-[hsl(14,86%,42%)]">
                    x{item.quantity}
                  </p>
                  <p className="font-redhatsemibold text-[10px] text-[hsl(7,20%,60%)]">
                    @ ${item.price.toFixed(2)}
                  </p>
                  <p className="font-redhatsemibold text-[10px] text-[hsl(12,20%,44%)]">
                    ${item.price.toFixed(2)}
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
          ))}
        </div>

        <div className="flex justify-between items-center mt-8">
          <h3 className="font-redhatthin text-[12px] text-[hsl(14,65%,9%)]">
            Order Total
          </h3>
          <h1 className="font-redhatbold">$0</h1>
        </div>

        <div className="flex mt-8 justify-center items-center space-x-2">
          <img
            src="./icon-carbon-neutral.svg"
            alt="icon remove item"
            className="w-4 h-4"
          />
          <p className="font-redhat text-[12px] text-center tracking-wide text-[hsl(12,20%,44%)]">
            This is a
            <span className="font-redhatsemibold text-[hsl(14,65%,9%)]">
              carbon-neutral
            </span>
            delivery
          </p>
        </div>

        <button className="flex font-redhatthin justify-center w-75 mt-8 rounded-full bg-[hsl(14,86%,42%)] text-white text-center p-3">
          Confirm Order
        </button>
      </div>
    </>
  );
}

export default Cart;
