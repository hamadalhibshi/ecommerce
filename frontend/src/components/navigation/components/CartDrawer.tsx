import { useEffect, useState } from "react";
import { IoBasketOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../state/Store";
import Drawer from "../../Drawer";
import { removeFromCart } from "../../../state/cart/cartSlice";

const CartDrawer = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
    setCartTotal(total);
  }, [cart]);

  const renderCartContent = () => (
    <div className="absolute inset-0 ">
      <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
          <div className="flex items-start justify-between">
            <h2 id="drawer-title" className="text-lg font-medium text-gray-900">
              Shopping cart
            </h2>
            {/* <div className="ml-3 flex h-7 items-center">
              <button
                type="button"
                command="close"
                commandfor="drawer"
                className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Close panel</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  data-slot="icon"
                  aria-hidden="true"
                  className="size-6"
                >
                  <path
                    d="M6 18 18 6M6 6l12 12"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div> */}
          </div>

          <div className="mt-8">
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cart.map((item) => (
                  <li className="flex py-6">
                    <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        className="size-full object-cover"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">{item.name}</a>
                          </h3>
                          <p className="ml-4">{item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">Salmon</p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <p className="text-gray-500">Qty {item.quantity} 1</p>

                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => dispatch(removeFromCart(item.id))}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${cartTotal}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              onClick={() => navigate("/cart")}
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or
              <button
                className="font-medium text-indigo-600 hover:text-indigo-500 ml-2"
                // onClick={}
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Drawer
      drawerId="cart-drawer"
      sidebarContent={renderCartContent()}
      toggleButton={
        <div className="btn btn-ghost">
          <div className="indicator">
            <IoBasketOutline color="white" size={30} />
            {cart?.length > 0 && (
              <span className="badge badge-xs indicator-item bg-red-600">
                {cart?.length}
              </span>
            )}
          </div>
        </div>
      }
    />
  );
};

export default CartDrawer;
