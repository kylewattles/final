import React from "react"
import AddAdoption from "./adoptionbutton"
import ImageComponent from "./PetImages";

type Pet = {
    id: number;
    name: string;
    type: string;
    breed: string;
    age: number;
    price: number;
    image: string
};

type PetCardProps = {
    pet: Pet
    addAdoption: (petId: number) => void;
};

const PetCard: React.FC<PetCardProps> = ({ pet, addAdoption}) => {
    return (
        <div className="card flex-grow-1">
          <div className="card-body">
            <ImageComponent image={pet.image} />
            <h3 className="card-title">{pet.name}</h3>
         <p className="card-text">{pet.type}</p>
         <p className="card-text">{pet.breed}</p>
         <AddAdoption pet={pet} addAdoption={addAdoption}/>
        </div>
        </div>
    )
}
export default PetCard