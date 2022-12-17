import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React, { Reducer, useReducer } from "react";

interface State{
    email:string;
    password:string;
}
type Action = {
    type: 'USER_EMAIL' | 'USER_PASSWORD';
    payload: string;
}
const reducer= (state:State,action:Action):{email:string, password:string}=>{
    switch(action.type){
        case 'USER_EMAIL':
            return {...state, email:action.payload}
        case 'USER_PASSWORD':
            return {...state, password:action.payload}
        default:
            throw new Error();
    }
}

const Login:React.FC = () => {

    const [state, dispatch] = useReducer<Reducer<State, Action>>(reducer,{
        email:'',
        password:'',
    });
const handleSubmit = (event:React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
}
    return ( 
        <>
        <Grid container sx={{justifyContent:'center',flexDirection:'column',display:'flex'}}>
            <Grid item>
                <Typography color='primary' sx={{textDecoration:'underline',fontFamily:'monospace',fontWeight:'bold'}}>Login Account</Typography>
            </Grid>
            <Grid item sx={{display:'flex',alignItems:'center', flexDirection:'column'}}>
                    <TextField 
                    variant="outlined" required
                    color="primary"
                    label='Email'
                    type='email'
                    value={state.email}
                    onChange={(event)=>dispatch({type:'USER_EMAIL',payload:event.target.value})}
                    sx={{marginTop:3,width:'300px'}}
                    />
                    <TextField 
                    variant="outlined" required
                    color="primary"
                    label='Password'
                    type='password'
                    value={state.password}
                    onChange={(event)=>dispatch({type:'USER_PASSWORD',payload:event.target.value})}
                    sx={{marginTop:3,width:'300px'}}
                    />
                    <Button color='primary' 
                    variant="contained" 
                    onClick={handleSubmit}
                    sx={{fontFamily:'monospace',marginTop:2}}>SUBMIT</Button>
                    <Typography>Don't have an account? <Link to='/signUp'>Sign up</Link></Typography>
            </Grid>
        </Grid>
        </>
     );
}
 
export default Login;