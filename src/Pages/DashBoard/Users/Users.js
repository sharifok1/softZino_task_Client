import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Users = () => {
    const [user, setUser] = useState();
    useEffect(()=>{
        const url = 'https://blooming-basin-45530.herokuapp.com/users'
        fetch(url)
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    console.log(user)
    return (
        <div>
           <h1>All Users</h1>
           {
                <div>
               
                {/* <Grid container spacing={{ xs: 2, md:1 }} columns={{ xs: 4, sm: 8, md:3, xl: }}>  */}
                {
                 user?.map(users=><div className='userList'
                 key={users._id} >
                     <h3>
                         Name : {users.displayName}
                     </h3>
                     <h3>
                     Email:{users.email}
                     </h3>
                 </div>)
                }
               {/* </Grid> */}
         
            </div>
           }
           
        </div>
    );
};

export default Users;