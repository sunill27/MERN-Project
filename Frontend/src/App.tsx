import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/login/Login";
import Home from "./pages/home/Home";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Cart from "./pages/cart/Cart";
import Checkout from "./pages/checkout/Checkout";
import MyOrders from "./pages/orders/myOrders/MyOrders";
import MyOrderDetails from "./pages/orders/myOrders/MyOrderDetails";

import io from "socket.io-client";
export const socket = io("http://localhost:4000", {
  auth: {
    token: localStorage.getItem("token"),
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart/" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/myorders/:id" element={<MyOrderDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
