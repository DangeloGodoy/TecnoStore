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


function Cart() {
    const TABLE_HEAD = ["Product Name", "Category", "Quantity", "Price"]
    const { cart, cartTotal, removeProduct, clearCart } = useContext(cartContext)
    const { totalProduct, totalPrice } = cartTotal()

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
            <div className="flex flex-row-reverse pr-52 py-1.5">
                <Link to={"/cart/checkout"}>
                    <Button className="md">Go to Checkout</Button>
                </Link>
            </div>
        </Card>
    );
}

export default Cart