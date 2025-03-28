import React from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
};

type CheckoutPageProps = {
  cartItems: CartItem[];
  onCheckout: () => void;
};

const CheckoutPage: React.FC<CheckoutPageProps> = ({ cartItems, onCheckout }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${totalCost.toFixed(2)}</h3>
      <button className="btn btn-success" onClick={onCheckout}>
        Complete Checkout
      </button>
    </div>
  );
};

export default CheckoutPage;