import { cartContext } from "./cartContext"
import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const isDuplicate = (item) => cart.some((prod) => prod.id === item.id)

    const addToCart = (item) => {
        if (isDuplicate(item)) {
            toast.warn("Producto ya existente en el carrito!", {
                position: "top-center",
                theme: "colored"
            });
            return;
        }
        setCart((prevCart) => [...prevCart, item]);
        toast.success("Producto agregado al carrito!", {
            position: "top-center",
            theme: "colored"
        });
        return
    }

    const clearCart = () => setCart([])
 
    return (
        <cartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
            <ToastContainer stacked/>
        </cartContext.Provider>
    )

}

export default CartProvider