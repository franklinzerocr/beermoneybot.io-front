import React from 'react'
import Grid from '@mui/material/Grid';
import TitleComprueba from '../components/TitleComprueba';

const Comprueba = () => {
    return(
        <Grid container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}> 
                <TitleComprueba/>
            </Grid> 
            <Grid item xs={3}></Grid>
        </Grid>
    );
}

export default Comprueba;