import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React, { Reducer, useReducer , useState} from "react";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import {Snackbar, Alert} from "@mui/material";

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
    await axios.post('http://localhost:8000/auth/signUp',state)
        .then(response=>{
           if(response.data.status !==200){
            setLoading(false);
            setError(response.data.message);
           }else{
            setLoading(true);
            localStorage.setItem("userInfo",JSON.stringify(response.data.token));
            setSuccess(response.data.message);
           }
        });
}
const [error, setError] = useState< boolean | string>(false);
const [loading, setLoading] = useState< boolean>(false);
const [success, setSuccess] = useState <boolean | string> (false);
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
                   {loading ?
                    <LoadingButton
                    variant="contained" loading
                    loadingPosition="start" 
                    sx={{fontFamily:'monospace',marginTop:2,width:'150px'}}
                    >Submitting</LoadingButton>
                    :
                    <Button color='primary' 
                    variant="contained" 
                    onClick={handleSubmit}
                    sx={{fontFamily:'monospace',marginTop:2}}>SUBMIT</Button>
                    }
                    <Typography>Aready have an account? <Link to='/login'>Login</Link></Typography>
            </Grid>
        </Grid>
        {error ? <Snackbar open={true } autoHideDuration={3000}>
                    <Alert severity="error">
                   {error}
                    </Alert>
        </Snackbar> :null}
        {success ? <Snackbar open={true } autoHideDuration={3000}>
                    <Alert severity="success">
                   {success}
                    </Alert>
        </Snackbar>: null}
        </>
     );
}
 
export default SignUp;