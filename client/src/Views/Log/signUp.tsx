import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React, { useReducer } from "react";

interface State{
    email:string;
    password:string;
}
interface Action{
    type: 'update';
    payload: {
      key: string;
      value: string;
    };
}

const reducer= (state:State,action:Action):any=>{
    switch(action.type){

    }
}

const SignUp:React.FC = () => {

    const [state, dispatch] = useReducer(reducer,{
        email:'',
        password:'',
    });
    return ( 
        <>
        <Grid container sx={{justifyContent:'center',flexDirection:'column',display:'flex'}}>
            <Grid item>
                <Typography color='primary' sx={{textDecoration:'underline',fontFamily:'monospace',fontWeight:'bold'}}>Register Account</Typography>
            </Grid>
            <Grid item sx={{display:'flex',alignItems:'center', flexDirection:'column'}}>
                    <TextField 
                    variant="outlined"
                    color="primary"
                    label='Email'
                    type='email'
                    name="email"
                    value={state.email}
                    sx={{marginTop:3,width:'300px'}}
                    />
                    <TextField 
                    variant="outlined"
                    color="primary"
                    label='Password'
                    type='password'
                    name="password"
                    value={state.password}
                    sx={{marginTop:3,width:'300px'}}
                    />
                    <Button color='primary' variant="contained" sx={{fontFamily:'mononspace',marginTop:2}}>SUBMIT</Button>
                    <Typography>Aready have an account? <Link to='/login'>Login</Link></Typography>
            </Grid>
        </Grid>
        </>
     );
}
 
export default SignUp;