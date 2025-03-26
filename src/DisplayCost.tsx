import React from "react";

const DisplayCost = ({totalCost}: {totalCost: number}) => {
    return (
        <h4>Total Cost: ${totalCost.toFixed(2)}</h4>
    )
}

export default DisplayCost