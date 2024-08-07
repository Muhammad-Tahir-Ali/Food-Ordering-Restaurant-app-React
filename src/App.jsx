import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import LoginPopUP from "./components/LoginPopUP/LoginPopUP";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [ShowLogin, setShowLogin] = useState(false);
  return (
    <>
      {ShowLogin ? <LoginPopUP setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <Navbar  setShowLogin ={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
