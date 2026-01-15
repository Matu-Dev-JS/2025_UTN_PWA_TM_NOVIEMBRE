import { createContext } from "react";

const AuthContext = createContext()


function AuthContextProvider ({children}){
    const providerValues = {}
    const [isLogged, setIsLogged] = useState(false)
    const [session, setSession] = useState({})
    
    return(
        <AuthContext.Provider value={providerValues}>
            {children}
        </AuthContext.Provider>
    )
}