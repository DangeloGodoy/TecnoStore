import { useState, useContext } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter
} from "@material-tailwind/react";
import { cartContext } from "../../context/cartContext";
import EditIcon from '@mui/icons-material/Edit';

function ModalEditCart({ title, category, quantity, price }) {
    const [open, setOpen] = useState(false)
    const [newQuantity, setNewQuantity] = useState(quantity)
    const { updateProductQty, removeProduct } = useContext(cartContext)

    const handleOpen = () => setOpen(!open)

    const handleSave = () => {
        if (newQuantity > 0) {
            updateProductQty(title, newQuantity)
        }
        handleOpen()
    };

    return (
        <>
            <Button onClick={handleOpen} variant="text" size="sm">
                <EditIcon/>
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Edit {title}</DialogHeader>
                <DialogBody>
                    <div>
                        <p>Category: {category}</p>
                        <p>Price: ${price.toFixed(2)}</p>
                        <label>
                            Quantity:
                            <input
                                type="number"
                                value={newQuantity}
                                onChange={(e) => setNewQuantity(Number(e.target.value))}
                                className="border p-2"
                            />
                        </label>
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button variant="text" color="red" onClick={() => removeProduct(title)}>
                        Delete
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleSave}>
                        Save
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default ModalEditCart;