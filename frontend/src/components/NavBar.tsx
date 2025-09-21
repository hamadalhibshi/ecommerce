import { IoBasketOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import type { RootState } from "../state/Store";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const navigate = useNavigate();
  const cart = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + Number(item.price), 0);
    setCartTotal(total);
  }, [cart]);

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
          E-Commerce
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => navigate("/products")}>Products</a>
          </li>
          <li>
            <a onClick={() => navigate("/about")}>About</a>
          </li>
          <li>
            <a onClick={() => navigate("/contact")}>Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          {/* cart */}
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <div className="indicator">
              <IoBasketOutline color="white" size={30} />
              {cart?.length > 0 && (
                <span className="badge badge-xs indicator-item bg-red-600">
                  {cart?.length}
                </span>
              )}
            </div>
          </div>

          {/* cart inner body modal */}
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-300 z-1 mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{cart?.length} items</span>
              <span className="text-info">Subtotal: ${cartTotal}</span>
              <div className="card-actions">
                <button
                  className="btn btn-primary btn-block"
                  onClick={() => navigate("/cart")}
                >
                  View cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* profile picture */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar ml-4"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => navigate("/auth/login")}>Login</a>
          </li>
          <li>
            <a onClick={() => navigate("/auth/register")}>Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
