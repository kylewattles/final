import { useEffect, useState } from "react";
import PetCard from "./PetCard";
import AddAdoption from "./adoptionbutton";
import PetHeader from "./PetHeader";
import Cart from "./cart"
import CheckOut from "./CheckOut"

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
  id: number
  name: string
  price: number
}

export default function App() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  useEffect(() => {
    const asyncFunction = async () => {
      const response = await fetch("http://localhost:3000/pets");
      const data = await response.json();
      setPets(data);
    };
    asyncFunction();
  }, []);

  const addAdoption = (petId: number) => {
    const pet = pets.find((p) => p.id === petId)
    if (pet) {
      setCartItems([...cartItems, { id: pet.id, name: pet.name, price: pet.price}])
    }
  };

  const removeFromCart = (itemId: number) => {
    setCartItems(cartItems.filter(item => item.id !== itemId))
  }

  return (
    <>
    <div className="container mt-3">
      <PetHeader/>
      <div className="d-flex flex-wrap gap-3">
        {pets.map((pet) => (
          <PetCard key={pet.id} pet={pet} addAdoption={addAdoption} />
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    <CheckOut/>
    </div>
    
    
    </>
  );
}