import { createContext, useState } from "react";

const cartItemChecker = (cartItems, productToAdd) => {

}

export const DropDownContext = createContext({
    isActive: false,
    setIsActive: () => {},
    cartItems: [],
    addItemToCart: () => 
})

export const DropDownProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(cartItemChecker(cartItems, productToAdd))
    }

    return (
        <>
        <DropDownContext.Provider value = {[isActive, setIsActive]}>
            {children}
        </DropDownContext.Provider>
        </>
    )
   
};