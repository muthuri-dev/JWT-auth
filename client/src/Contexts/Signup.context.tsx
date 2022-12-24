import { createContext,useReducer } from "react";

//exporting context;
export const SignUpContext = createContext<{state:State; dispatch:Dispatch} |undefined>(undefined);


const initialValues={
    name:'',
    email:'',
    password:'',

}
interface State{
    name:string;
    email:string;
    password:string;
}

interface Action{
    type: 'USER_PASSWORD' | 'USER_NAME' | 'USER_EMAIL' ;
    payload:string;
}

type Dispatch= (action:Action)=>void;

const reducer = (state:State, action:Action):State=>{
    switch(action.type){
        case 'USER_NAME':
            return{
                ...state, name:action.payload
            }
        case "USER_EMAIL":
            return{
                ...state, email:action.payload
            }
        case "USER_PASSWORD":
            return{
                ...state, password:action.payload
            }
        default:
            throw new Error('Error Occurred');
    }
}

const SignUpContextProvider = ({children}:{children:React.ReactNode}) => {
    const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialValues);
    return ( 
        <SignUpContext.Provider value={{state, dispatch}}>
            {children}
        </SignUpContext.Provider>
     );
}
 
export default SignUpContextProvider;