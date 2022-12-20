import { Button, Grid, Typography } from "@mui/material";
import React ,{useCallback}from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {

    const navigate = useNavigate();
    const handleLogout = useCallback((event:React.MouseEvent<HTMLButtonElement>)=>{
            event.preventDefault();
            localStorage.removeItem("userInfo");
            navigate('/login');
    },[])
    return ( 
        <>
        <Grid container>
            <Grid item>
                <Typography>Protected route</Typography>
                <Button color='success'variant="contained"
                onClick={handleLogout} 
                >LOG OUT</Button>
            </Grid>
        </Grid>
        </>
     );
}
 
export default HomePage;