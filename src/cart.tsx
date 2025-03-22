import React from "react";

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
  return (
    <div className="cart-sidebar">
      <h3>Who is coming home with you?</h3>
      {cartItems.length === 0 ? (
        <p>no new friends -_- </p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item.id)}>Nevermind</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;