import { useState, useEffect } from "react";
import OneProduct from "./OneProduct";

const Products = ({handleAddToCartBtn}) => {
  const [allproducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div className="w-full lg:w-3/4">
     <div className="grid grid-cols-1 lg:grid-cols-2">
     {allproducts.map((element, index) => (
      <OneProduct element={element} key={index} handleAddToCartBtn={handleAddToCartBtn}></OneProduct>
      ))}
     </div>
    </div>
  );
};

export default Products;
