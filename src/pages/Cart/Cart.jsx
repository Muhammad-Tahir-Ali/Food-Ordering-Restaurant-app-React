import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import Footer from "../../components/Footer/Footer";
import "./Cart.css";

const Cart = () => {
  const { CartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <>
      <div className="cart">
        <h2>Your Cart</h2>
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Item</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <hr />
          {food_list && Object.keys(CartItems).length > 0 ? (
            food_list.map((item) => {
              const quantity = CartItems[item._id];
              if (quantity > 0) {
                const total = item.price * quantity;
                return (
                  <div key={item.id} className="cart-item">
                    <p>{item.name}</p>
                    <p>{item.title}</p>
                    <p>${item.price.toFixed(2)}</p>
                    <p>{quantity}</p>
                    <p>${total.toFixed(2)}</p>
                    <button onClick={() => removeFromCart(item._id)}>
                      Remove
                    </button>
                  </div>
                );
              }
              return null;
            })
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
      </div>
      <div className="btn">
        <button className="confirm-btn" id="confirm-btn">
          Conferm Your Order
        </button>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Cart;
