import { createContext, useState} from 'react';
import React from 'react'

export const UserContext = createContext<UserLogin | undefined>(undefined);


interface UserLogin{
  children?: React.ReactNode;
  name:string;
}

const UserContextProvider:React.FC<UserLogin> = (props) => {
    const name = 'kennedy';
  return (
    <UserContext.Provider value={{name}}>
        {props.children}
    </UserContext.Provider>
  )
}

export default UserContextProvider;