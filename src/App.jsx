import Products from "./Components/Products.jsx";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="bg-[hsl(20,50%,98%)] flex flex-col items-center justify-center mb-4 lg:flex-row lg:items-start lg:justify-center pt-14">
      <Products />
      <Cart />
    </div>
  );
}

export default App;
