import React from 'react'
import Grid from '@mui/material/Grid';
import TitleQueEs from '../components/TitleQueEs';
import TextQueEs from '../components/TextQueEs';
import LayoutSection from '../containers/LayoutSection';

const QueEs = () => {
    return (
        <LayoutSection>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                <Grid item xs={12} >
                        <TitleQueEs/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextQueEs/>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                <img src={process.env.PUBLIC_URL + '/image_card1.jpg'} alt="image_card1" className="first-card"/>
                
                </Grid> 
            </Grid>
        </LayoutSection>
    );

}

export default QueEs;