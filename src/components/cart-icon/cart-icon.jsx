import { useContext } from 'react'

import { DropDownContext } from '../../contexts/dropdown-context'

import ShoppingBagIcon from '../../assets/shopping-bag.svg?react'

import './cart-icon.scss'

const CartIcon = () => {
    const { isActive, setIsActive } = useContext(DropDownContext)

    const toggleDropDown = () => setIsActive(!isActive)

    return (
        <div>
            <ShoppingBagIcon 
                className ="shopping-icon" 
                onClick={toggleDropDown}>
            <span className='item-count'>0</span>
            </ShoppingBagIcon>
        </div>
    )   
}

export default CartIcon;