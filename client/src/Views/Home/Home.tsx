import { Button, Grid, Typography } from "@mui/material";
import React ,{useCallback}from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/Context";

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    const handleLogout = useCallback((event:React.MouseEvent<HTMLButtonElement>)=>{
            event.preventDefault();
            localStorage.removeItem("userInfo");
            navigate('/login');
    },[]);
    const user= useContext(UserContext);
    return ( 
        <Grid container>
            <Grid item>
                <Typography>Protected route</Typography>
                <Button color='success'variant="contained"
                onClick={handleLogout} 
                >LOG OUT</Button>
                <Typography>{user?.name}</Typography>
            </Grid>
        </Grid>
     );
}
 
export default HomePage;