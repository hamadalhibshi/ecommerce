import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../state/Store";
import { FaRegTrashAlt } from "react-icons/fa";
import { removeFromCart } from "../../state/cart/cartSlice";
import { Screen } from "../../components";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <Screen>
      {cart?.length > 0 ? (
        <ul className="list rounded-box pt-15">
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
      ) : (
        <div className="flex items-center justify-center pt-5 lg:pt-30">
          <p className="text-gray-500">Cart is empty</p>
        </div>
      )}
    </Screen>
  );
};

export default Cart;
