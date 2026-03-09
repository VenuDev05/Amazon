import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, updateQuantity, updatePrice } from "./store/cartslice/Cartslice";
import './Cart.css'

const Cart = () => {

  const cartProducts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const deleteCart = (item) => {
    dispatch(deleteFromCart(item));
  };

  const incrementCart = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: quantity + 1 }));
  };

  const decrementCart = (id, quantity) => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id, quantity: quantity - 1 }));
    }
  };

  if (cartProducts.length === 0) {
    return <h2 id="empty">Your cart is empty</h2>;
  }
  

  return (
    <div className="cart-container">
      <h1>My Cart</h1>

      <ul className="cart-list">
        {cartProducts.map((item) => (
          <li key={item.id} className="cart-item">

            <img src={item.img} alt={item.name} />

            <div className="cart-info">
              <h2>{item.name}</h2>

              <div className="cart-price">
                <h3>₹{item.price * item.quantity}</h3>
              </div>
            </div>

            <div className="cart-quantity">
              <button onClick={() => decrementCart(item.id, item.quantity)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementCart(item.id, item.quantity)}>+</button>
            </div>

            <button
              className="remove-btn"
              onClick={() => deleteCart(item)}
            >
              Remove
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;