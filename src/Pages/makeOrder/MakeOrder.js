import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth/useAuth';

const MakeOrder = () => {
    const {user}=useAuth()
    const [orders,setOrders]=useState([]);
    const id = useParams(); 
//-----------------------------------------------getting  product to filter user orders
    useEffect(()=>{
        const url='https://blooming-basin-45530.herokuapp.com/allProducts'
        fetch(url)
        .then(res=>res.json())
        .then(data=> setOrders(data))
    },[]);
  
    //--------------------------------------------post user orderhandler
    const filterOrder = orders.filter(myOrder=> myOrder._id === id._id)
    const ShiffingCost = 49;
    return (
        <div>
            {
              filterOrder.map(myOrder=><div
              key={myOrder._id}
              >
                  <Box>
                  <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{border:1,m:4, bgcolor:'#e3c8dd'}}>
                            <img style={{width:'70%', marginTop:'20px', borderRadius:'10PX'}} src={myOrder.img} alt="" />
                            <h4>{myOrder.Name}</h4>
                            <p>{myOrder.Description}</p>
                            <h3>price:${myOrder.Price}</h3>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{m:5, boxShadow:'2px 2px 10px 5px #777', p:2}}>
                            <h3>Order Summary</h3>
                          <h4>Product Price:${parseInt(myOrder.Price)}</h4>
                          <h4>Delivery Cost: ${parseInt(ShiffingCost)}</h4>
                          <h4>Vat(5%): ${parseFloat(myOrder.Price*(5/100)).toFixed(2)}</h4>
                          <hr />
                          <h1>Total:${(parseInt(myOrder.Price))+(parseInt(ShiffingCost))+(parseFloat(parseFloat(myOrder.Price*(5/100)).toFixed(2)))}</h1>
                            </Box>
                          <br />
                          <button className="Ordeerbtn"
                              >Confirm Order</button>
                        </Grid>
                        </Grid>
                  </Box>
              </div>)  
            }
        </div>
    );
};

export default MakeOrder;