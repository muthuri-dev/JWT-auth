import { Alert, Button, Grid, Snackbar, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React, {  useState, useEffect , useContext} from "react";
import axios from "axios";
import { LoadingButton } from "@mui/lab";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Contexts/Login.context";



const Login = () => {
    const state = useContext(LoginContext);
    const dispatch  = useContext(LoginContext);
const handleSubmit = async (event:React.MouseEvent<HTMLButtonElement>)=>{
    event.preventDefault();
    await axios.post('http://localhost:8000/auth/login',state?.state)
        .then(response=>{
           if(response.data.status !==200){
            setLoading(false);
            console.log(state?.state);
            setError(response.data.message);
           }else{
            setLoading(true);
            localStorage.setItem("userInfo",JSON.stringify(response.data.token));
           }
        });
}
const [error, setError] = useState<string | boolean>(false);
const [loading, setLoading] = useState< boolean>(false);

const navigate = useNavigate();

useEffect(()=>{
    const userInfo = localStorage.getItem("userInfo");
    if(userInfo){
        navigate('/');
    }
},[navigate]);
    return ( 
        <>
        <Grid container sx={{justifyContent:'center',flexDirection:'column',display:'flex'}}>
            <Grid item>
                <Typography color='primary' sx={{textDecoration:'underline',fontFamily:'monospace',fontWeight:'bold'}}>Login Account</Typography>
            </Grid>
            <Grid item sx={{display:'flex',alignItems:'center', flexDirection:'column'}}>
                    <TextField 
                    variant="outlined" required
                    color="primary" label='Email'
                    type='email' value={state?.state.email}
                    onChange={(event)=>dispatch?.dispatch({type:'USER_EMAIL',payload:event.target.value})}
                    sx={{marginTop:3,width:'70%'}}
                    />
                    <TextField 
                    variant="outlined" required
                    color="primary"  label='Password'
                    type='password' value={state?.state.password}
                    onChange={(event)=>dispatch?.dispatch({type:'USER_PASSWORD',payload:event.target.value})}
                    sx={{marginTop:3,width:'70%'}}
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
                    <Typography>Don't have an account? <Link to='/signUp'>Sign up</Link></Typography>
            </Grid>
        </Grid>
        {error ? <Snackbar open={true } autoHideDuration={3000}>
                    <Alert severity="error">
                   {error}
                    </Alert>
        </Snackbar> :null}
        </>
     );
}
 
export default Login;