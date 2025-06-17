function AddBtn() {
  return (
    <>
      <div className="flex items-center justify-center absolute bottom-[-20px] left-[50%] -translate-x-[50%] w-38 h-10 rounded-3xl  bg-white border-1 border-[hsl(12,20%,44%)] hover:border-[hsl(14,86%,42%)] hover:text-[hsl(14,86%,42%)] hover:cursor-pointer">
        <img
          src="./icon-add-to-cart.svg"
          alt="Add to cart logo"
          className="w-5 mr-2"
        />
        <span className="font-redhatsemibold text-sm">Add to Cart</span>
      </div>

      {/*   THIS IS THE UI FOR THE BUTTON AFTER ADD TO CART IS CLICKED
       
        <div className="hidden items-center justify-around absolute text-white bottom-[-20px] left-[50%] -translate-x-[50%] w-38 h-10 rounded-3xl  bg-[hsl(14,86%,42%)] border-1  border-[hsl(14,86%,42%)]  hover:cursor-pointer">
        <div className="h-5 w-5 inline-flex border border-white p-1 rounded-full">
          <img src="./icon-decrement-quantity.svg" alt="Decrement Logo" />
        </div>

        <span className="font-redhatsemibold text-sm">2</span>
        <div className="h-5 w-5 inline-flex border border-white p-1 rounded-full">
          <img src="./icon-increment-quantity.svg" alt="Increment Logo" />
        </div>
      </div>
      */}
    </>
  );
}

export default AddBtn;
