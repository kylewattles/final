import React from "react";
import DisplayCost from "./DisplayCost";

type CartItem = {
  id: number;
  name: string;
  price: number;
};

type CartProps = {
  cartItems: CartItem[];
  removeFromCart: (itemId: number) => void;
};

const Cart: React.FC<CartProps> = ({ cartItems, removeFromCart }) => {
    const totalCost = cartItems.reduce((total, item) => total + item.price, 0)
  return (
    <div className="cart-sidebar">
      <h3>Who is coming home with you?</h3>
      {cartItems.length === 0 ? (
        <p>What? Do you like not providing homes for animals? What's wrong with you? </p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
              <button onClick={() => removeFromCart(item.id)}>Cancel</button>
            </li>
          ))}
        </ul>
      )}
      <DisplayCost totalCost={totalCost}/>
    </div>
  );
};

export default Cart;