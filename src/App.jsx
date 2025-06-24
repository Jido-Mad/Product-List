import { useState } from "react";
import Products from "./Components/Products";
import Cart from "./Components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
  };

  return (
    <div className="flex flex-col md:flex-row p-4">
      <Products addToCart={addToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
