import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Badge, Button } from "@material-tailwind/react";
import { cartContext } from '../../context/cartContext';
import { useContext } from 'react';

function CartWidget() {
    const { cartTotal } = useContext(cartContext)
    const { totalProduct } = cartTotal()
    return (
        <Badge content={totalProduct}>
            <Button><ShoppingBasketIcon /></Button>            
        </Badge>
    )
}

export default CartWidget