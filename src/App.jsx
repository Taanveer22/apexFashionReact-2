// import { useState } from 'react'

import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <div className="flex justify-between">
        <Products></Products>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
