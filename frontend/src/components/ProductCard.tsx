import { useNavigate } from "react-router-dom";

const ProductCard = ({ image, title, price, onClick }: any) => {
  const navigate = useNavigate();

  return (
    <div
      className="card card-sm bg-base-100 max-w-80 shadow max-h-120"
      onClick={() => navigate("/product-details")}
    >
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/daisyui-hat-1.webp"
          className="hover:scale-110"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title flex justify-between">
          {title}
          <span className="font-normal">{price}</span>
        </h2>
        <p>{title}</p>
        {/* <div className="card-actions justify-end">
          <button onClick={onClick} className="btn btn-primary">
            Add to cart
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductCard;
