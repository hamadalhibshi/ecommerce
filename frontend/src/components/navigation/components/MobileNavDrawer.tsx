import { useNavigate } from "react-router-dom";
import { navigation } from "../../../constants";

const MobileNavDrawer = () => {
  const navigate = useNavigate();

  return (
    <div className="drawer lg:hidden">
      <input id="mobile-nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="mobile-nav-drawer" className="btn btn-ghost btn-square">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="mobile-nav-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        />
        <div className="bg-base-200 text-base-content min-h-full w-80">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-6">Menu</h2>
            <ul className="menu w-full">
              {navigation.map((nav) => (
                <li key={nav.id}>
                  <a
                    className="text-lg py-3"
                    onClick={() => navigate(nav.href)}
                  >
                    {nav.title}
                  </a>
                </li>
              ))}

              <div className="divider" />

              <li>
                <a
                  className="text-lg py-3"
                  onClick={() => navigate("/auth/login")}
                >
                  Login
                </a>
              </li>
              <li>
                <a
                  className="text-lg py-3"
                  onClick={() => navigate("/auth/register")}
                >
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavDrawer;
