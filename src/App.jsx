import { useState } from "react";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [isActive, setIsActive] = useState({
    info: true,
    status: "active",
  });

  const [addedProducts, setAddedProducts] = useState([]);

  const handleActiveButton = (status) => {
    if (status === "info") {
      setIsActive({ info: true, status: "info-btn-active" });
    } else {
      setIsActive({ info: false, status: "task-btn-active" });
    }
  };
  // console.log(isActive);
  const handleAddToCartBtn = (productElement) => {
    // console.log(productElement);
    console.log(addedProducts);
    const isExist = addedProducts.find(
      (existProduct) => existProduct.id === productElement.id
    );
    if (isExist) {
      alert("product already added");
    } else {
      const newAddedProducts = [...addedProducts, productElement];
      setAddedProducts(newAddedProducts);
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <Navbar addedProducts={addedProducts}></Navbar>
      <div className="flex justify-between">
        <Products handleAddToCartBtn={handleAddToCartBtn}></Products>
        <Cart
          addedProducts={addedProducts}
          isActive={isActive}
          handleActiveButton={handleActiveButton}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
