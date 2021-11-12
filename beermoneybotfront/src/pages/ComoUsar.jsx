import React from 'react'
import Grid from '@mui/material/Grid';
import TitleComoUsar from '../components/TitleComoUsar';
import TextQueEs from '../components/TextQueEs';

const ComoUsar = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={8}>
            <Grid item xs={12} >
                    <TitleComoUsar/>
                </Grid>
                <Grid item xs={12}>
                    <TextQueEs/>
                </Grid>
            </Grid>
            <Grid item xs={4}>
            <img src={process.env.PUBLIC_URL + '/image_card1.jpg'} alt="image_card1" className="first-card"/>
            
            </Grid> 
        </Grid>
    );

}

export default ComoUsar;