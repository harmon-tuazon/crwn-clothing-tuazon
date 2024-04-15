import { createContext, useEffect , useState } from "react";
import PRODUCTS from '../shop-data.json'

export const ProductContext = createContext({
    products: [],
    setProduct: () => null
})

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(PRODUCTS);

    useEffect(() => {
        fetch()
        .then((response) => response.json())
        .then((products) => setProducts(products))
    },[])
    
    return (
        <>
        <ProductContext.Provider value = {[products, setProducts]}>
            {children}
        </ProductContext.Provider>
        </>
    )
   
};