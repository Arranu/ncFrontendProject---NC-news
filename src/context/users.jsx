import { createContext, useState } from 'react';

export const UserContext = createContext();
export const LoggedInUser = ({avatar}) =>{
    const [user,setUser]=useState('tickle122') //default user for testing/presentation - need  login system

    return(
        <UserContext.Provider value ={{user,setUser}}>
            {avatar}
        </UserContext.Provider>
    )
}