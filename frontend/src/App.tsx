import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Cart,
  Home,
  Login,
  NotFound,
  ProductDetails,
  Products,
  Register,
} from "./pages";
import { NavBar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="auth">
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="products" element={<Products />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product-details" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
