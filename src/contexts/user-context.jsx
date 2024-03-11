import { createContext, useEffect , useState } from "react";

import { onAuthStateListener, 
        createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    user: null,
    setUser: () => null
})

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateListener((user) => {
            if (user) {
             createUserDocumentFromAuth(user);
            }
            setUser(user)
        })
        return unsubscribe }
    ,[])
    
    return (
        <>
        <UserContext.Provider value = {[user, setUser]}>
            {children}
        </UserContext.Provider>
        </>
    )
   
};