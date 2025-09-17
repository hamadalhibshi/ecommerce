const ProductCard = ({ image, title, price }: any) => {
  return (
    <div className="card bg-base-300 h-70 w-80 md:w-96 md:h-85 shadow-sm">
      <figure>
        <img src={image} alt={title} className="w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{price}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
