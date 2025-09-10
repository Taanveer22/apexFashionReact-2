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

  const [cartPrice, setCartPrice] = useState(0);

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
    // console.log(addedProducts);
    const isExist = addedProducts.find(
      (existProduct) => existProduct.id === productElement.id
    );
    if (isExist) {
      alert("product already added");
    } else {
      handleIncreasePrice(productElement);
      const newAddedProducts = [...addedProducts, productElement];
      setAddedProducts(newAddedProducts);
    }
  };

  const handleDeleteBtn = (clickedId) => {
    // console.log(clickedId);
    const remainingAddedProducts = addedProducts.filter(
      (element) => element.id !== clickedId
    );
    setAddedProducts(remainingAddedProducts);
    handleDecreasePrice(clickedId);
  };

  const handleIncreasePrice = (productElement) => {
    const newCartPrice = productElement.price + cartPrice;
    setCartPrice(newCartPrice);
  };

  const handleDecreasePrice = (productId) => {
    // console.log(productId);
    const DeletedProductElement = addedProducts.find(
      (productElement) => productElement.id === productId
    );
    const newCartPrice = cartPrice - DeletedProductElement.price;
    setCartPrice(newCartPrice);
  };

  return (
    <div className="w-11/12 mx-auto">
      <Navbar cartPrice={cartPrice} addedProducts={addedProducts}></Navbar>
      <div className="flex flex-col lg:flex-row justify-between">
        <Products handleAddToCartBtn={handleAddToCartBtn}></Products>
        <Cart
          handleDeleteBtn={handleDeleteBtn}
          addedProducts={addedProducts}
          isActive={isActive}
          handleActiveButton={handleActiveButton}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
