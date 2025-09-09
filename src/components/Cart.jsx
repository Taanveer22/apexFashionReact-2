import Info from "./Info";
import Task from "./Task";

const Cart = ({ handleActiveButton, isActive }) => {
  // console.log(handleActiveButton);
  console.log(isActive);
  return (
    <div className="w-full lg:w-1/4">
      <h1>Cart</h1>
      <div className="flex justify-between my-5">
        <button
          onClick={() => handleActiveButton("info")}
          className={`${isActive.info ? "btn btn-success" : "btn"}`}
        >
          Info
        </button>
        <button
          onClick={() => handleActiveButton("task")}
          className={`${isActive.info ? "btn" : "btn btn-success"}`}
        >
          Task
        </button>
      </div>
      {isActive.info ? <Info></Info> : <Task></Task>}
    </div>
  );
};

export default Cart;
