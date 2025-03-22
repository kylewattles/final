
const addAdoption = ({pet, addAdoption}: {pet:{price:number, id:number}, addAdoption: (id:number ) => void }) => {
    return(
<button
          className="btn btn-success" onClick={() => addAdoption(pet.id)}
          >
            ${pet.price.toFixed(2)}</button>
    )
}
export default addAdoption;