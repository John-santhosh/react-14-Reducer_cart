import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";
import { getTotal } from "./utils-totals";

const GlobalContext = createContext();

const initialState = {
  isLoading: false,
  cart: new Map(),
};

export const GlobalAppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { totalAmount, totalCost } = getTotal(state.cart);

  // actions
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: id });
  };
  const increase = (id) => {
    dispatch({ type: INCREASE, payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: id });
  };

  // fetch data

  const url = "https://course-api.com/react-useReducer-cart-project";

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: LOADING });
        const res = await fetch(url);
        const cart = await res.json();
        dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        totalAmount,
        totalCost,
        clearCart,
        removeItem,
        increase,
        decrease,
      }}
    >
      <>{children}</>
    </GlobalContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(GlobalContext);
