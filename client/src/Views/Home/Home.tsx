import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const HomePage: React.FC = () => {
    return ( 
        <>
        <Grid container>
            <Grid item>
                <Typography>Kenya is green</Typography>
                <Button color='success'variant="contained">Click</Button>
            </Grid>
        </Grid>
        </>
     );
}
 
export default HomePage;