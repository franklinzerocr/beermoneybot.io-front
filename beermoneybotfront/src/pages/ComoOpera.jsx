import React from 'react'
import Grid from '@mui/material/Grid';
import TitleComoOpera from '../components/TitleComoOpera';
import TextComoOpera from '../components/TextComoOpera';
import TitleComoVerificar from '../components/TitleComoVerificar';
import LayoutVerificar from '../containers/LayoutVerificar';

const ComoOpera = () => {
    return(
        <Grid container spacing={2}>

            <Grid item xs={6}>
                <Grid item xs={12}>
                    <TitleComoOpera/>
                </Grid>  
                <Grid item xs={12}>
                <img src={process.env.PUBLIC_URL + '/image_card1.jpg'} alt="image_card1" className="first-card"/>
                </Grid>  
            </Grid>

            <Grid item xs={6}>
                <Grid item xs={12}>
                    <TextComoOpera/>
                </Grid>
                <Grid item xs={12}>
                    <LayoutVerificar>
                    <TitleComoVerificar/>
                    <TextComoOpera/>
                    </LayoutVerificar>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default ComoOpera;