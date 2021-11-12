import React from 'react'
import Grid from '@mui/material/Grid';
import TitleComprueba from '../components/TitleComprueba';
import LayoutSection from '../containers/LayoutSection';

const Comprueba = () => {
    return(
        <LayoutSection>
            <Grid container spacing={2}>
                <Grid item xs={12}> 
                    <TitleComprueba/>
                </Grid> 
            </Grid>
        </LayoutSection>
    );
}

export default Comprueba;