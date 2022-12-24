import { createContext ,useReducer} from 'react';
import React from 'react'

export const LoginContext = createContext<{state:State; dispatch:Dispatch} | undefined>(undefined );

export interface State{
  email:string;
  password:string;
}
export type Dispatch =(action:Action)=>void;

export interface Action{
  type:'USER_EMAIL' | 'USER_PASSWORD';
  payload:string;
}

const reducer = (state:State, action:Action):State=>{
  switch(action.type){
    case 'USER_EMAIL':
      return{
        ...state,email:action.payload
      }
    case 'USER_PASSWORD':
      return{
        ...state, password:action.payload
      }
    default:
      throw new Error('Error');
  }
}
const initialValues={
  email:'',
  password:'',
}

const LoginContextProvider = ({children}:{children:React.ReactNode}) => {
    const [state, dispatch] =  useReducer<React.Reducer<State,Action>>(reducer, initialValues);
  return (
    <LoginContext.Provider value={{ dispatch, state}}>
        {children}
    </LoginContext.Provider>
  )
}

export default LoginContextProvider;