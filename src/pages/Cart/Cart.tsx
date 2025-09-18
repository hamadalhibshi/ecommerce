import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../state/Store";
import { FaRegTrashAlt } from "react-icons/fa";
import { removeFromCart } from "../../state/cart/cartSlice";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  console.log(cart);

  return (
    <ul className="list bg-base-100 rounded-box shadow-md pt-15">
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
