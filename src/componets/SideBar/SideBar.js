import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';


export default function SwipeableTemporaryDrawer() {
    const {cartProducts} = useContext(CartContext)
    console.log(cartProducts)



    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem >
                    <ListItemButton>
                        <ListItemText >
                            <h2>Titulo</h2>
                        </ListItemText >
                    </ListItemButton>
                </ListItem>
                <Divider />
                <Link className='nav__li__link' to="/">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText >
                                Menu
                            </ListItemText >
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link className='nav__li__link' to="/contacto">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText >
                                Reservas
                            </ListItemText >
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link className='nav__li__link' to="/contacto">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText >
                                Carrito
                            </ListItemText >
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Link className='nav__li__link' to="/contacto">
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText >
                                Mapa
                            </ListItemText >
                        </ListItemButton>
                    </ListItem>
                </Link>

                <Divider />
                
                <ListItem >
                    <ListItemButton>
                        <ListItemText >
                            <h3>Social</h3>
                        </ListItemText >
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    );
    const anchor = "left"
    return (
        <div>

            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)} color="inherit" ><MenuIcon /></Button>
                <SwipeableDrawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    onOpen={toggleDrawer(anchor, true)}
                >
                    {list(anchor)}
                </SwipeableDrawer>
            </React.Fragment>

        </div>
    );
}
