import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import cartItems from "./data";

const GlobalContext = createContext();

export const GlobalAppContext = ({ children }) => {
  const res = cartItems.map((item) => {
    return [item.id, item];
  });
  const map = new Map(res);

  const initialState = {
    loading: false,
    cart: map,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  // actions
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: id });
  };
  return (
    <GlobalContext.Provider value={{ ...state, clearCart, removeItem }}>
      <>{children}</>
    </GlobalContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);

// let cart = new Map([
//   ["banana", { name: "banana" }],
//   ["apple", { name: "apple" }],
// ]);

// console.log([...cart]);
// console.log(cart.entries());

// console.log(map);
// for (let [key, value] of cart) {
//   console.log(key, value);
// }
// let a = {
//   name: "banana",
//   name1: "apple",
// };

// for (let [b, c] in a) {
//   console.log(b);
//   console.log(c);
// }
// for (let b in Object.entries(a)) {
//   console.log(b);
// }
// console.log(Object.entries(a));
