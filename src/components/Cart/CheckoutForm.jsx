import { Input, Card, Typography, Button } from "@material-tailwind/react"
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import { serverTimestamp } from "firebase/firestore";
import { createOrder } from "../../firebase/db";
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom";

function CheckoutFrom() {
    const TABLE_HEAD = ["Product Name", "Category", "Quantity", "Price"];
    const { cart, clearCart } = useContext(cartContext)
    const totalProduct = cart.reduce((total, product) => total + product.quantity, 0)
    const totalPrice = cart.reduce((total, product) => total + (product.price * product.quantity), 0)
    const navigate = useNavigate()

    if (cart.length === 0) {
        Swal.fire({
            title: "Your cart is empty",
            text: "Please, add productos to cart",
            icon: "info"
        }).then((result) => navigate('/'))
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        const phone = e.target.phone.value

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
            }).then((result) => {
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
                <form onSubmit={handleSubmit} className="flex flex-col gap-7" action="">
                    <Input id="name" type='text' variant='standard' label="Name" placeholder="Name" required />
                    <Input id="phone" type='tel' variant='standard' label="Phone number" placeholder="Phone number" required />
                    <Input id="email" type='email' variant='standard' label="Email addres" placeholder="Email addres" required />
                    <Button type='submit'>Order Now</Button>

                </form>
                <div >
                </div>
            </Card>
        </div>
    )
}

export default CheckoutFrom