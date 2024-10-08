import { Input, Card, Typography, Button } from "@material-tailwind/react"
import { cartContext } from "../../context/cartContext";
import { useContext, useState } from "react";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../../firebase/db";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";
import ErrorIcon from '@mui/icons-material/Error';

function CheckoutFrom() {
    const TABLE_HEAD = ["Product Name", "Category", "Quantity", "Price"];
    const { cart, clearCart, cartTotal } = useContext(cartContext)
    const { totalProduct, totalPrice } = cartTotal()
    const navigate = useNavigate()
    const [errors, setErrors] = useState({})

    if (cart.length === 0) {
        Swal.fire({
            title: "Your cart is empty",
            text: "Please, add productos to cart",
            icon: "info"
        }).then(() => navigate('/'))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value.trim()
        const email = e.target.email.value.trim()
        const phone = e.target.phone.value.trim()

        let valid = true
        let newErrors = {}
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (name === '') {
            valid = false
            newErrors.name = "Name is required!"
        }
        if (email === '') {
            valid = false
            newErrors.email = "Email address is required!"
        } else if (!emailRegex.test(email)) {
            valid = false
            newErrors.email = "Please enter a valid email address!"
        }
        if (phone === '') {
            valid = false
            newErrors.phone = "Phone number is required!"
        }

        setErrors(newErrors)
        if (!valid) {
            return
        }

        const order = {
            buyer: { name, email, phone },
            items: cart,
            date: serverTimestamp(),
            total: parseFloat(totalPrice.toFixed(2))
        }

        try {
            const orderId = await createOrder(order)
            let timerInterval
            Swal.fire({
                title: "Order create successfully",
                text: `Your order ID is ${orderId}`,
                icon: "success",
                timer: 5000,
                timerProgressBar: true,
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then(() => {
                navigate('/')
                clearCart()
            })
        } catch (error) {
            console.error("Error creating order: ", error)
        }

    }

    return (
        <div className="flex flex-row justify-around">
            <Card className="h-full w-[38.125rem] overflow-scroll">
                <Typography
                    className="text-2xl font-bold leading-none pt-2.5 pl-2.5"
                >
                    Order Summary
                </Typography>
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="p-4 pt-10">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-bold leading-none"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(({ title, category, quantity, price }) => {
                            return (
                                <tr key={title}>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-bold"
                                        >
                                            {title}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            className="font-normal text-gray-600"
                                        >
                                            {category}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            className="font-normal text-gray-600"
                                        >
                                            {quantity}
                                        </Typography>
                                    </td>
                                    <td className="p-4">
                                        <Typography
                                            variant="small"
                                            className="font-normal text-gray-600"
                                        >
                                            $ {(price * quantity).toFixed(2)}
                                        </Typography>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                    <tfoot className="border-t border-gray-300">
                        <tr>
                            <td className="p-4">
                                <Typography
                                    color="blue-gray"
                                    variant="small"
                                    className="font-bold"
                                >
                                    Total
                                </Typography>
                            </td>
                            <td className="p-4"></td>
                            <td className="p-4">
                                <Typography
                                    color="blue-gray"
                                    variant="small"
                                    className="font-bold"
                                >
                                    {totalProduct}
                                </Typography>
                            </td>
                            <td className="p-4">
                                <Typography
                                    color="blue-gray"
                                    variant="small"
                                    className="font-bold"
                                >
                                    $ {totalPrice.toFixed(2)}
                                </Typography>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </Card>
            <Card className="h-full w-[38.125rem] overflow-scroll">
                <Typography
                    className="text-2xl font-bold leading-none pl-2.5 py-4"
                >
                    Contact Information
                </Typography>
                <form onSubmit={handleSubmit} className="flex flex-col gap-7">
                    <div>
                        <Input id="name" type='text' variant='standard' label="Name" placeholder="Name" />
                        {errors.name && (
                            <Typography
                                variant="small"
                                color="red"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >
                                <ErrorIcon />{errors.name}
                            </Typography>)}
                    </div>
                    <div>
                        <Input id="phone" type='tel' variant='standard' label="Phone number" placeholder="Phone number" />
                        {errors.phone && (
                            <Typography
                                variant="small"
                                color="red"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >
                                <ErrorIcon />{errors.phone}
                            </Typography>)}
                    </div>
                    <div>
                        <Input id="email" type='text' variant='standard' label="Email addres" placeholder="Email addres" />
                        {errors.email && (
                            <Typography
                                variant="small"
                                color="red"
                                className="mt-2 flex items-center gap-1 font-normal"
                            >
                                <ErrorIcon />{errors.email}
                            </Typography>)}
                    </div>
                    <Button type='submit'>Order Now</Button>
                </form>
                <div >
                </div>
            </Card>
        </div>
    )
}

export default CheckoutFrom