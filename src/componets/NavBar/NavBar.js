import './NavBar.scss'
import SwipeableTemporaryDrawer from '../SideBar/SideBar'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const NavBar = () => {

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" > 
                <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} >
                    <SwipeableTemporaryDrawer />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div">
                    Consumiendo Infiernos
                </Typography>
                </Toolbar>
            </AppBar>
            
        </Box>
    )
}

export default NavBar
