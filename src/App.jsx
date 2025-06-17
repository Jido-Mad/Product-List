import Products from "./Components/Products.jsx";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="bg-[hsl(20,50%,98%)] flex flex-col items-center justify-center lg:flex-row lg:items-start lg:justify-around">
      <Products />
      <Cart />
    </div>
  );
}

export default App;
