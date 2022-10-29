import {createContext, useEffect, useState}from "react";

export const AuthContext = createContext()


export const AuthContextProvider = ({children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null)  

    const login = () => {
        //login to do 
        setCurrentUser({id:1, name:"firas", profilePicture:"https://images.pexels.com/photos/1255061/pexels-photo-1255061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})
    }

    useEffect(()=>{
       localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]) 
    return (
        <AuthContext.Provider value={{ currentUser, login}}>
            {children}
        </AuthContext.Provider>
    )
}