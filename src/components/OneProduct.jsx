const OneProduct = ({ element }) => {
  // console.log(element);
  const { image, description, price, title } = element;
  return (
    <div>
      <div className="card bg-slate-300 shadow-sm m-5">
        <figure>
          <img src={image} className="w-full h-40" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description.slice(0, 96)}</p>
          <div className="card-actions justify-end items-center">
            <div className="badge badge-xl badge-outline">${price}</div>
            <button className="btn btn-accent">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProduct;
