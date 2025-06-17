import Products from "./Components/Products.jsx";
import Cart from "./Components/Cart";

function App() {
  return (
    <div className="bg-[hsl(20,50%,98%)] flex items-center justify-center">
      <Products />
      <Cart />
    </div>
  );
}

export default App;
