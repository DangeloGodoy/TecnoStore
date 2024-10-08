import {
    Button,
    Card,
    Typography,
    IconButton,
    Input
} from "@material-tailwind/react";
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ModalEditCart from "../Modal/ModalEditCart";
import Swal from "sweetalert2";

function Cart() {
    const TABLE_HEAD = ["Product Name", "Category", "Quantity", "Price"]
    const { cart, cartTotal, clearCart } = useContext(cartContext)
    const { totalProduct, totalPrice } = cartTotal()
    const removeAllProducts = () => {
        if (cart.length === 0) {
            Swal.fire({
                title: "The cart is empty",
                icon: "warning"
              })
        } else {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    clearCart()
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your cart has been cleared.",
                        icon: "success"
                    })
                }
            })
        }
    }

    return (
        <Card className="h-full w-full overflow-scroll">
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
                                    {quantity}
                                </td>
                                <td className="flex items-center gap-3">
                                    <Typography
                                        variant="small"
                                        className="font-normal text-gray-600"
                                    >
                                        $ {(price * quantity).toFixed(2)}
                                    </Typography>
                                    <ModalEditCart
                                        title={title}
                                        category={category}
                                        quantity={quantity}
                                        price={price}
                                    />
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
            <div className="flex gap-2 flex-row-reverse pr-52 py-1.5">
                <Link to={"/cart/checkout"}>
                    <Button size="sm">Go to Checkout</Button>
                </Link>
                <Button
                    size="sm"
                    color="red"
                    onClick={removeAllProducts}>
                    Clear Cart
                </Button>
            </div>
        </Card>
    );
}

export default Cart