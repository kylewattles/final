import React from "react"

type CheckoutProps = {
    onCheckout: () => void
}



const checkoutButton: React.FC<CheckoutProps> = ({onCheckout}) => {
    return (
        <div style={{ paddingBottom: "20px" }}>
            <button className="btn btn-primary" onClick={onCheckout}>Checkout</button>
        </div>
    )
} 

export default checkoutButton
