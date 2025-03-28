import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PetCard from "./PetCard";
import PetHeader from "./PetHeader";
import Cart from "./cart";
import CheckoutPage from "./checkoutPage";
import AboutPage from "./AboutPage";

type Pet = {
  id: number;
  name: string;
  type: string;
  breed: string;
  age: number;
  price: number;
  image: string;
};

type CartItem = {
  id: number;
  name: string;
  price: number;
};

export default function App() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const asyncFunction = async () => {
      const response = await fetch("http://localhost:3000/pets");
      const data = await response.json();
      setPets(data);
    };
    asyncFunction();
  }, []);

  const addAdoption = (petId: number) => {
    const pet = pets.find((p) => p.id === petId);
    if (pet) {
      setCartItems([...cartItems, { id: pet.id, name: pet.name, price: pet.price }]);
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("um... you have to have something in your cart to check out genius.");
    } else {
      alert("thank you for adopting you are maybe a good person but still maybe not.");
      setCartItems([]);
    }
  };

  return (
    <Router>
      <div className="container mt-3">
        <PetHeader />
        <nav>
          <Link to="/" className="btn btn-primary me-2">Home</Link>
          <Link to="/checkout" className="btn btn-secondary me-2">Checkout</Link>
          <Link to="/about" className="btn btn-info me-2">About</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="d-flex flex-wrap gap-3">
                  {pets.map((pet) => (
                    <PetCard key={pet.id} pet={pet} addAdoption={addAdoption} />
                  ))}
                </div>
                <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
              </>
            }
          />
          <Route
            path="/checkout"
            element={<CheckoutPage cartItems={cartItems} onCheckout={handleCheckout} />}
          />

<Route
            path="/about"
            element={<AboutPage/>}
          />

        </Routes>
      </div>
    </Router>
  );
}