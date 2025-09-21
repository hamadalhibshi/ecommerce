import { useEffect, useState } from "react";
import { IoBasketOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../../../state/Store";
import Drawer from "../../Drawer";

const CartDrawer = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
    setCartTotal(total);
  }, [cart]);

  const renderCartContent = () => (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">{cart?.length} items</span>
          <span className="text-info text-lg">Subtotal: ${cartTotal}</span>
        </div>
        {cart?.length > 0 ? (
          <div className="space-y-2">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-2 bg-base-100 rounded"
              >
                <span className="text-sm">{item.name}</span>
                <span className="text-sm font-semibold">${item.price}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty</p>
        )}
        <div className="pt-4">
          <button
            className="btn btn-primary btn-block"
            onClick={() => navigate("/cart")}
          >
            View Full Cart
          </button>
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
