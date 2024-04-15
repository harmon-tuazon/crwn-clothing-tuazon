import { createContext, useEffect , useState } from "react";

export const DropDownContext = createContext({
    products: [],
    setProduct: () => null
})

export const DropDownProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <>
        <DropDownContext.Provider value = {[products, setProducts]}>
            {children}
        </DropDownContext.Provider>
        </>
    )
   
};