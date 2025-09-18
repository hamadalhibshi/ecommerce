import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../state/Store";
import { FaRegTrashAlt } from "react-icons/fa";
import { removeFromCart } from "../../state/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {cart?.map((item, index) => (
        <li className="list-row" key={index}>
          <div>
            <img className="size-10 rounded-box" src={item.image} />
          </div>
          <div>
            <div>{item.name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              {item.price}
            </div>
          </div>
          <button className="btn btn-square btn-ghost">
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 3L20 12 6 21 6 3z"></path>
              </g>
            </svg>
          </button>
          <button
            className="btn btn-square btn-ghost"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            <FaRegTrashAlt color="red" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Cart;
