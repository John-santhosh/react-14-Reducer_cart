import CartItem from "./CartItem";
import cartItems from "../data";
import { useGlobalContext } from "../Context";
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS,
} from "../actions";
const CartContainer = () => {
  const { cart, clearCart } = useGlobalContext();
  //we can also use
  // console.log([...cart]);
  // console.log(Array.from(cart));
  // console.log(Array.from(cart.entries()));
  const cartArray = Array.from(cart.entries());
  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>$10</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={() => clearCart()}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;