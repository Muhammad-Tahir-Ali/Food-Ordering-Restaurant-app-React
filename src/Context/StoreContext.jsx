import { createContext } from "react";
import { useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [CartItems, setCartItems] = useState({});




    const addToCart = (itemId) => {
        if (!CartItems[itemId]) {
            setCartItems({ ...CartItems, [itemId]: 1 });
        } else {
            setCartItems({ ...CartItems, [itemId]: CartItems[itemId] + 1 });
        }
    };
    const removeFromCart = (itemId) => {
        if (!CartItems[itemId]) {
      setCartItems({ ...CartItems, [itemId]: 0 });
    } else {
      setCartItems({ ...CartItems, [itemId]: CartItems[itemId] - 1 });
    }
  };
  useEffect(() => {
    console.log(CartItems);
  }, [CartItems]);

  const contextValue = {
    food_list,
    CartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
