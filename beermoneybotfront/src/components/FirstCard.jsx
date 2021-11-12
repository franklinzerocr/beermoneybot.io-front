import React from 'react';
import Grid from '@mui/material/Grid';
import '../styles/Header.scss'

const First_Card = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <img src={process.env.PUBLIC_URL + '/image_card1.jpg'} alt="image_card1" className="first-card"/>
            </Grid>
        </Grid>
    );
}

export default First_Card;