import { createContext, useState } from 'react';

export const UserContext = createContext();

export const LoggedInUser = ({children}) =>{
    const [user,setUser]=useState({username:'tickle122'}) //default user for testing/presentation - need  login system

    return (
        <UserContext.Provider value ={{user,setUser}}>
            
            {children}
        </UserContext.Provider>
    )
}