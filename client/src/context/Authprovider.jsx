/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { createContext, useContext, useState } from 'react'
import Cookies from 'js-cookie'
export const AuthContext = createContext()
export const Authprovider = ({children}) => {

    const initialUserState = Cookies.get("jwt") || localStorage.getItem("ChatApp"); 

    const [authUser, setAuthUser] = useState(initialUserState? JSON.parse(initialUserState) : undefined);
    return(
        <>
            <AuthContext.Provider value={[authUser, setAuthUser]}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export const useAuth = () => useContext(AuthContext)