import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

function CartWidget () {
    return (
        <div className='cart-widget'>
            <ShoppingBasketIcon/>
            <span className='cart-count'>+3</span>
        </div>
    )
}

export default CartWidget