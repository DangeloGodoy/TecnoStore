import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { Badge, Button } from "@material-tailwind/react";

function CartWidget() {
    return (
        <Badge content="2">
            <Button><ShoppingBasketIcon /></Button>            
        </Badge>
    )
}

export default CartWidget