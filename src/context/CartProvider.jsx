import { cartContext } from "./cartContext"
import { useState } from "react"
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const isDuplicate = (item) => cart.some((prod) => prod.id === item.id)

    const addToCart = (item) => {
        if (isDuplicate(item)) {
            toast.warn("Product already existing in the cart!", {
                position: "top-center",
                theme: "colored"
            });
            return
        }
        setCart((prevCart) => [...prevCart, item]);
        toast.success("Product added to cart!", {
            position: "top-center",
            theme: "colored"
        })
        return
    }

    const clearCart = () => setCart([])

    const cartTotal = () => {
        const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0)
        const totalProduct = cart.reduce((total, product) => total + product.quantity, 0)

        return { totalPrice, totalProduct }
    }

    const removeProduct = (title) => {
        setCart((prevCart) => prevCart.filter((item) => item.title !== title))
        toast.error("Product remove of the cart!", {
            position: "top-center",
            theme: "colored"
        })
    }

    const updateProductQty = (title, newQuantity) => {
        setCart((prevCart) => prevCart.map((item) => item.title === title ? { ...item, quantity: newQuantity } : item ))
        toast.info("Update quantity success!", {
            position: "top-center",
            theme: "colored"
        })
    }

return (
    <cartContext.Provider value={{ cart, addToCart, clearCart, cartTotal, removeProduct, updateProductQty }}>
        {children}
        <ToastContainer stacked />
    </cartContext.Provider>
)

}

export default CartProvider