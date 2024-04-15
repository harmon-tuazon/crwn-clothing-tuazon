import Button from '../button/button.component';

import CartItem from '../cart-items/cart-item';

import './cart-dropdown.scss'

const CartDropdown = () => {
    return (
        <div className='cart-dropdown-container'>
            <div className ="cart-items">
                <CartItem></CartItem>
                <Button>CHECKOUT</Button>
            </div>
        </div>
    )
}

export default CartDropdown;