import { AppBar, Button, CssBaseline, Divider, Drawer, Grid, IconButton, List, ListItem,  ListItemText, Toolbar, Typography } from '@mui/material';
import * as React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import { Box} from '@mui/system';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageProduct from '../ManageProduct/ManageProduct';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../Hooks/useAuth/useAuth';
import './Dashboard.css'
import Users from '../Users/Users';

const drawerWidth = 250;
const drawerHeight = '100vh' 

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {user, logOut, admin} = useAuth()

  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const logOutHandler =()=>{
    
     logOut()

  }
 

  const drawer = (
    
    <div
      sx={{ fontWeight: 500 }}
    >
      <Toolbar 
       sx={{mt:-7}}
      />
      <NavLink to ='/'> <h2>Lighting World</h2> </NavLink>
      <Divider/>
     <Box sx={{textAlign:"start", p:1}}>
      <NavLink to={`${url}/Users`}><Button sx={{color:'#000',fontSize: 18}} >User</Button></NavLink> <Divider/>
      <NavLink to={`${url}/ManageProduct`}><Button sx={{color:'#000',fontSize: 18}} >Products</Button></NavLink> <Divider/>
      <NavLink to={`${url}/AddProduct`}><Button sx={{color:'#000',fontSize: 18}} >Add A product</Button></NavLink>
      </Box>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor:'#150254',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          pt:1.5,
          pb:1,
        }}
       
      >
        <Toolbar>
          
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 1, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container>
            <Grid xs={4}>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
            </Grid>
            <Grid xs={8}>
              <Typography variant="h6" noWrap component="div">
              {user.displayName}
            </Typography>
           
              </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          
        >
          {drawer}
        </Drawer>
        <Drawer
        
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth , height:drawerHeight},
          }}
          open
        
        >
          {drawer}
             
          </Drawer>
       </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p:1, bgcolor:'primary.main', width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <Switch>
        <Route exact path={path}>
         <ManageProduct></ManageProduct>
        </Route>
        <Route path={`${path}/ManageProduct`}>
          <ManageProduct></ManageProduct>
        </Route>
        <Route path={`${path}/AddProduct`}>
          <AddProduct></AddProduct>
        </Route>   
        <Route path={`${path}/Users`}>
          <Users></Users>
        </Route>   
      </Switch>


        <Box sx={{ flexGrow: 1 }}>
        </Box>
      </Box>
     
    </Box>
    
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
