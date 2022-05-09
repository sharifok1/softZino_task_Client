import { Grid } from '@mui/material';
import React from 'react';
import './OfferSlider.css'
const OfferSlider = () => {
   
    return (
        <div>
            <h1>50% diacount going</h1>
            
                <Grid item xs={12} md={12}>
                  <img  sx={{mx:"auto"}} style={{ maxWidth:'100%'}} src="https://i.ibb.co/PGZMDN4/50-discount.jpg" alt="" />
                </Grid>
            
        </div>
    );
};

export default OfferSlider;