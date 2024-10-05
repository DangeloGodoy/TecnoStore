import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Badge, Button } from "@material-tailwind/react";
import { cartContext } from '../../context/cartContext';
import { useContext } from 'react';

function CartWidget() {
    const { cart } = useContext(cartContext)
    return (
        <Badge content={cart.length}>
            <Button><ShoppingBasketIcon /></Button>            
        </Badge>
    )
}

export default CartWidget