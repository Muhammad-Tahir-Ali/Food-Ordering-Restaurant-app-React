import React from "react";
import { useState } from "react";
import "./LoginPopUP.css";
import { assets } from "../../assets/assets";

const LoginPopUP = ({ setShowLogin }) => {
  const [CurrState, setCurrState] = useState("Sign Up");

  return (
    <div className="LoginPopUP">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{CurrState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-input">
          {CurrState === "login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Username" required />
          )}

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {CurrState === "Sign Up" ? "Create Account" : "Sign In"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing , I agree to the terms of use and privacy policy</p>
        </div>
        {CurrState === "login" ? (
          <p className="p-text">
            Create a new account ?<span className="span-element" onClick={() => setCurrState("Sign Up")} >click here</span>
          </p>
        ) : (
          <p className="p-text">
            Already have an account ?<span className="span-element" onClick={() => setCurrState("login")} >Login here</span>
          </p>
        )}
      </form>
    </div>
  ); onclick 
};

export default LoginPopUP;
