import { useNavigate } from "react-router-dom";
import { CartDrawer, MobileNavDrawer, ProfileDropdown } from "./components";
import { navigation } from "../../constants";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 w-full z-50">
      <MobileNavDrawer />
      <div className="navbar-start">
        <a
          className="btn btn-ghost md:text-xl text-center"
          onClick={() => navigate("/")}
        >
          E-Commerce
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((nav) => (
            <li key={nav.id}>
              <a onClick={() => navigate(nav.href)}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end">
        <CartDrawer />
        <ProfileDropdown />
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
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
