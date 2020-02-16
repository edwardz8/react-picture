import React, { useContext } from "react"
import { Context } from '../Context'

function Cart() {
    const { cartItems } = useContext(Context)
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
        </main>
    )
}

export default Cart