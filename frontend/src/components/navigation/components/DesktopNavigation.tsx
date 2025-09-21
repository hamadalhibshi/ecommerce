import { useNavigate } from "react-router-dom";
import { navigation } from "../../../constants";

const DesktopNavigation = () => {
  const navigate = useNavigate();

  return (
    <>
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
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          <li>
            <a onClick={() => navigate("/auth/login")}>Login</a>
          </li>
          <li>
            <a onClick={() => navigate("/auth/register")}>Register</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default DesktopNavigation;
