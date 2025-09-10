const Navbar = ({ addedProducts, cartPrice }) => {
  // console.log(addedProducts);
  // console.log(cartPrice);
  return (
    <div className="flex justify-between items-center my-5 text-2xl font-medium">
      <h1>Apex Fashion</h1>
      <ul className="flex gap-5">
        <li>Home</li>
        <li>Cart{addedProducts.length}</li>
        <li>Price : {cartPrice} $</li>
      </ul>
    </div>
  );
};

export default Navbar;
