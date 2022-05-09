import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';
import "./Topbanner.css"
const Topbanner = () => {
    return (
         <div className="banner-img">
            <div className="topbanner">
            <h1>Lighting world is the second business of SoftZino Technologies</h1>
           <div> 
           <NavLink to="/AllProduct">
                       <span className="banner-btn">See More Product</span>
                       </NavLink> 
           </div>
        </div>
        </div>
    );
};

export default Topbanner;

