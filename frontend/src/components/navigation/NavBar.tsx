import { useNavigate } from "react-router-dom";
import {
  CartDrawer,
  DesktopNavigation,
  MobileNavDrawer,
  ProfileDropdown,
} from "./components";

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 w-full z-50">
      <MobileNavDrawer />
      <div className="navbar-start">
        <a
          className="btn btn-ghost text-xl text-center"
          onClick={() => navigate("/")}
        >
          E-Commerce
        </a>
      </div>

      <DesktopNavigation />

      <CartDrawer />
      <ProfileDropdown />
    </div>
  );
};

export default NavBar;
