import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "./actions";

export function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }
  if (action.type === REMOVE) {
    // the reason for creating a new Map is to not mutate the state because non-primitives are call-by-value
    const newCart = new Map(state.cart);
    newCart.delete(action.payload);
    return { ...state, cart: newCart };
  }
  if (action.type === INCREASE) {
    const newCart = new Map(state.cart);
    const id = action.payload;
    newCart.get(id).amount += 1;
    // or
    // const item = newCart.get(action.payload);
    // const result = { ...item, amount: item.amount + 1 };
    // newCart.set(action.payload, result);
    // return { ...state, cart: newCart };

    return { ...state, cart: newCart };
  }
  if (action.type === DECREASE) {
    const newCart = new Map(state.cart);
    const id = action.payload;
    const updatedNewCart = (newCart.get(id).amount -= 1);
    // or
    // const item = newCart.get(action.payload);
    // const result = { ...item, amount: item.amount - 1 };
    // newCart.set(action.payload, result);
    // return { ...state, cart: newCart };

    if (updatedNewCart <= 0) {
      newCart.delete(id);
      return { ...state, cart: newCart };
    }
    return { ...state, cart: newCart };
  }

  if (action.type == LOADING) {
    return { ...state, isLoading: true };
  }
  if (action.type == DISPLAY_ITEMS) {
    // console.log(action.payload.cart);
    const data = action.payload.cart;
    const result = data.map((item) => {
      return [item.id, item];
    });
    const map = new Map(result);
    // console.log(map);
    return { cart: map, isLoading: false };
  }

  throw new Error(`no matching action type : ${action.type}`);
}
