import { useState } from "react";

import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [isActive, setIsActive] = useState({
    info: true,
    status: "active",
  });

  const handleActiveButton = (status) => {
    if (status === "info") {
      setIsActive({ info: true, status: "info-btn-active" });
    } else {
      setIsActive({ info: false, status: "task-btn-active" });
    }
  };
  console.log(isActive);

  return (
    <div className="w-11/12 mx-auto">
      <Navbar></Navbar>
      <div className="flex justify-between">
        <Products></Products>
        <Cart isActive={isActive} handleActiveButton={handleActiveButton}></Cart>
      </div>
    </div>
  );
}

export default App;
