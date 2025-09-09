const Info = ({ addedProducts, handleDeleteBtn }) => {
  // console.log(addedProducts);
  // console.log(handleDeleteBtn);
  return (
    <div>
      {addedProducts.map((item) => (
        <div>
          <div className="flex items-center justify-between gap-3">
            <img src={item.image} className="w-12" />
            <h1>{item.title}</h1>
            <h3>${item.price}</h3>
            <button
              onClick={() => handleDeleteBtn(item.id)}
              className="btn btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Info;
