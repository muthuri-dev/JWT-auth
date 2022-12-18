import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React, { Reducer, useReducer , useState} from "react";
import axios from "axios";

interface State{
    name:string;
    email:string;
    password:string;
}
type Action = {
    type: 'USER_EMAIL' | 'USER_PASSWORD' | 'USER_NAME';
    payload: string;
}

type Errors = {
    type: 'LOADING';
}


const reducer= (state:State,action:Action):{email:string, password:string, name:string}=>{
    switch(action.type){
        case 'USER_EMAIL':
            return {...state, email:action.payload}
        case 'USER_PASSWORD':
            return {...state, password:action.payload}
        case 'USER_NAME':
            return {...state, name:action.payload}
        default:
            throw new Error();
    }
}

const SignUp:React.FC = () => {

    const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer,{
        name:'',
        email:'',
        password:'',
    });
const handleSubmit = async(event:React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
    console.log(state);
    try{
       await axios.post('http://localhost:8000/auth/signUp',state);
    }catch(error:any){
        setError(error.response.data.message);
    }
}
const [error, setError] = useState<string | boolean>(false);
const [loading, setLoading] = useState<string | boolean>(false);
    return ( 
        <>
        <Grid container sx={{justifyContent:'center',flexDirection:'column',display:'flex'}}>
            <Grid item>
                <Typography color='primary' sx={{textDecoration:'underline',fontFamily:'monospace',fontWeight:'bold'}}>Register Account</Typography>
            </Grid>
            <Grid item sx={{display:'flex',alignItems:'center', flexDirection:'column'}}>
                    <TextField 
                    variant="outlined" required
                    color="primary" label='Username'
                    type='text' value={state.name}
                    onChange={(event)=>dispatch({type:'USER_NAME',payload:event.target.value})}
                    sx={{marginTop:3,width:'50%'}}
                    />
                    <TextField 
                    variant="outlined" required
                    color="primary" label='Email'
                    type='email' value={state.email}
                    onChange={(event)=>dispatch({type:'USER_EMAIL',payload:event.target.value})}
                    sx={{marginTop:3,width:'50%'}}
                    />
                    <TextField 
                    variant="outlined" required
                    color="primary" label='Password'
                    type='password'value={state.password}
                    onChange={(event)=>dispatch({type:'USER_PASSWORD',payload:event.target.value})}
                    sx={{marginTop:3,width:'50%'}}
                    />
                    <Button color='success' 
                    variant="contained" 
                    onClick={handleSubmit}
                    sx={{fontFamily:'monospace',marginTop:2}}>SUBMIT</Button>
                    <Typography>Aready have an account? <Link to='/login'>Login</Link></Typography>
            </Grid>
        </Grid>
        </>
     );
}
 
export default SignUp;