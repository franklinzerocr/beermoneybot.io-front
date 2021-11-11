import React from 'react';
import Grid from '@mui/material/Grid';
import '../styles/Header.scss'

const First_Card = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <img src="./public/image_card1.jpg" alt="image_card1" className="logo"/>
            </Grid>
        </Grid>
    );
}

export default First_Card;