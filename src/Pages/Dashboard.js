import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PrivateMeterReadings from '../components/PrivateMeterReadings';
import Tap from '../components/Tap';
import Walve from '../components/Walve';
import SLPAMeterReadings from '../components/SLPAMeterReadings';
import LineChart from '../components/LineChart';
import Map from '../components/Map';

import {useNavigate} from 'react-router-dom';
import MeterReadingCard from '../components/MeterReadingCard';
import axios from 'axios';

const drawerWidth = 240;
const navItems = ['Home', 'Private', 'SLPA', 'Graphs', 'Tap', 'Walve'];

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchId, setSearchId] = useState('');
  const [meterReadings, setMeterReadings] = useState(null);
  const [isHomeSelected, setIsHomeSelected] = useState(false);
  const [isPrivateSelected, setIsPrivateSelected] = useState(true);
  const [isSLPASelected, setIsSLPASelected] = useState(false);
  const [isGraphsSelected, setIsGraphsSelected] = useState(false);
  const [isTapSelected, setIsTapSelected] = useState(false);
  const [isWalveSelected, setIsWalveSelected] = useState(false);
  const [isMapSelected, setIsMapSelected] = useState(false);
  
  const [searchError, setSearchError] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setSearchError(null);
  

    event.preventDefault();
    try {
      if (isPrivateSelected) {
        const { data } = await axios.get(`http://localhost:4000/privateReadings/${searchId}`);
        setMeterReadings(data);
      } else if (isSLPASelected) {
        const { data } = await axios.get(`http://localhost:4000/slpaReadings/${searchId}`);
        setMeterReadings(data);
        console.log("SLPA -> " + data)
      } else if (isTapSelected) { // Handle "Tap" component
        const { data } = await axios.get(`http://localhost:4000/tap/${searchId}`); // Adjust the API endpoint
        console.log("Tap"+data);
        setMeterReadings(data);
      } else if (isWalveSelected) { // Handle "Walve" component
        const { data } = await axios.get(`http://localhost:4000/walve/${searchId}`); // Adjust the API endpoint
        setMeterReadings(data);
      }
    } catch (error) {
      console.log(error);
      setSearchError(error.response.data.error);
    }
  };
  
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }} onClick={()=> setMeterReadings(null)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))} */}
                <Button
                  key="Home"
                  sx={{ color: isHomeSelected ? '#000' : '#fff' }}
                  onClick={() => {
                    setIsHomeSelected(true);
                    setIsPrivateSelected(false);
                    setIsSLPASelected(false);
                    setIsGraphsSelected(false);
                    setIsTapSelected(false);
                    setIsWalveSelected(false);
                    setIsMapSelected(false);
                  }}
                >
                  Home
                </Button>
                <Button
                  key="Private"
                  sx={{ color: isPrivateSelected ? '#000' : '#fff' }}
                  onClick={() => {
                    setIsHomeSelected(false);
                    setIsPrivateSelected(true);
                    setIsSLPASelected(false);
                    setIsGraphsSelected(false);
                    setIsTapSelected(false);
                    setIsWalveSelected(false);
                    setIsMapSelected(false);
                  }}
                >
                  Private
                </Button>
                <Button
                  key="SLPA"
                  sx={{ color: isSLPASelected ? '#000' : '#fff' }}
                  onClick={() => {
                    setIsHomeSelected(false);
                    setIsPrivateSelected(false);
                    setIsSLPASelected(true);
                    setIsGraphsSelected(false);
                    setIsTapSelected(false);
                    setIsWalveSelected(false);
                    setIsMapSelected(false);
                  }}
                 >
                  SLPA
                </Button>
                <Button
                  key="Graph"
                  sx={{ color: isGraphsSelected ? '#000' : '#fff' }}
                  onClick={() => {
                    setIsHomeSelected(false);
                    setIsPrivateSelected(false);
                    setIsSLPASelected(false);
                    setIsGraphsSelected(true);
                    setIsTapSelected(false);
                    setIsWalveSelected(false);
                    setIsMapSelected(false);
                  }}
                 >
                  Graphs
                </Button>
                <Button
                  key="Tap"
                  sx={{ color: isTapSelected ? '#000' : '#fff' }}
                  onClick={() => {
                    setIsHomeSelected(false);
                    setIsPrivateSelected(false);
                    setIsSLPASelected(false);
                    setIsGraphsSelected(false);
                    setIsTapSelected(true);
                    setIsWalveSelected(false);
                    setIsMapSelected(false);
                  }}
                 >
                  Tap
                </Button>
                <Button
                  key="Walve"
                  sx={{ color: isWalveSelected ? '#000' : '#fff' }}
                  onClick={() => {
                    setIsHomeSelected(false);
                    setIsPrivateSelected(false);
                    setIsSLPASelected(false);
                    setIsGraphsSelected(false);
                    setIsTapSelected(false);
                    setIsWalveSelected(true);
                    setIsMapSelected(false);
                  }}
                 >
                  Walve
                </Button>
                <Button
                  key="Map"
                  sx={{ color: isMapSelected ? '#000' : '#fff' }}
                  onClick={() => {
                    setIsHomeSelected(false);
                    setIsPrivateSelected(false);
                    setIsSLPASelected(false);
                    setIsGraphsSelected(false);
                    setIsTapSelected(false);
                    setIsWalveSelected(false);
                    setIsMapSelected(true);
                  }}
                 >
                  Map
                </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
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
      </nav>
      <Box component="main" style={{padding:isMapSelected ? 0 : 24, width: isMapSelected ? '100%' : 'auto'}} 
      sx={{ p: 3 }}>
        <Toolbar />
        {isHomeSelected && navigate('/')}
        {isPrivateSelected && <PrivateMeterReadings
          value={searchId}
          onChange={(newValue) => setSearchId(newValue)}
        />}
        {isSLPASelected && <SLPAMeterReadings
          value={searchId}
          onChange={(newValue) => setSearchId(newValue)}
        />}
        {searchError && <Typography style={{ color: 'red' }}>{searchError}</Typography>}
        <br />
        {!isGraphsSelected && !isMapSelected && 
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Search
        </Button>
        }
        
        {isGraphsSelected && <LineChart />}
        {isTapSelected && <Tap 
                  value={searchId}
                  onChange={(newValue) => setSearchId(newValue)}
                  />}
        {isWalveSelected && <Walve 
                  value={searchId}
                  onChange={(newValue) => setSearchId(newValue)}
                  />}
        {isPrivateSelected && meterReadings && <MeterReadingCard meterReadings={{meterReadings}}  />}
        {isSLPASelected && meterReadings && <MeterReadingCard meterReadings={{meterReadings}} />}
        {isTapSelected && meterReadings && <MeterReadingCard meterReadings={{meterReadings}} />}
        {isWalveSelected && meterReadings && <MeterReadingCard meterReadings={{meterReadings}}  />}
        {isMapSelected && <Map />}
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